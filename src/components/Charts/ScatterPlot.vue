<template>
  <div class="scatterplot">
    <svg class="scatterplot-svg" :height="height" :width="width">
      <circle v-for="element in dataset.data" :key="element[dataset.idColumn]"
        :cx="xPosition(element[xAxisColumn])"
        :cy="yPosition(element[yAxisColumn])"
        :r="radius(element[radiusColumn])"
        />
        <g class="xAxis">
        </g>
        <g class="yAxis">
        </g>
    </svg>
  </div>
</template>

<script lang="ts">
import * as d3 from 'd3';
import Vue from 'vue';
import { ScaleLinear } from 'd3';
import { MultivariateDataset } from '@/models/MultivariateDataset';

export default Vue.extend({
  props: {
    dataset: {
      type: Object as () => MultivariateDataset,
    },
    xAxisColumn: String,
    yAxisColumn: String,
    radiusColumn: String,
  },

  data() {
    return {
      height: 800,
      width: 800,
      margin: {
        top: 40, right: 40, bottom: 40, left: 40,
      },
      axisLengthOverMaxValueFactor: 1.1,
      minRadius: 3,
      maxRadius: 10,
    };
  },

  mounted() {
    this.createXAxis();
    this.createYAxis();
  },

  watch: {
    xAxisColumn() {
      this.createXAxis();
    },
    yAxisColumn() {
      this.createYAxis();
    },
  },

  computed: {
    xMaxValue(): number {
      return Math.max(...this.dataset.data.map(
        (entry) => entry[this.xAxisColumn],
      ));
    },

    yMaxValue(): number {
      return Math.max(...this.dataset.data.map(
        (entry) => entry[this.yAxisColumn],
      ));
    },

    radiusMaxValue(): number {
      return Math.max(...this.dataset.data.map(
        (entry) => entry[this.radiusColumn],
      ));
    },
  },

  methods: {
    createXAxis() {
      const g : d3.Selection<SVGSVGElement, unknown, HTMLElement, unknown> = d3.select('.xAxis');
      g.attr('transform', `translate(0, ${this.height - this.margin.bottom})`)
        .call(this.xAxisGenerator());
    },

    createYAxis() {
      const g : d3.Selection<SVGSVGElement, unknown, HTMLElement, unknown> = d3.select('.yAxis');
      g.attr('transform', `translate(${this.margin.left}, 0)`)
        .call(this.yAxisGenerator());
    },

    xScale() : ScaleLinear<number, number, never> {
      return d3.scaleLinear()
        .domain([0, this.xMaxValue * this.axisLengthOverMaxValueFactor])
        .range([this.margin.left, this.width - this.margin.right]);
    },

    xAxisGenerator() {
      return d3.axisBottom(this.xScale());
    },

    xPosition(xAxisColumnValue: number) : number {
      return this.xScale()(xAxisColumnValue);
    },

    yScale() : ScaleLinear<number, number, never> {
      return d3.scaleLinear()
        .domain([0, this.yMaxValue * this.axisLengthOverMaxValueFactor])
        .range([this.height - this.margin.bottom, this.margin.top]);
    },
    yAxisGenerator() {
      return d3.axisLeft(this.yScale());
    },

    yPosition(yAxisColumnValue: number) : number {
      return this.yScale()(yAxisColumnValue);
    },

    radiusScale() : ScaleLinear<number, number, never> {
      return d3.scaleLinear()
        .domain([0, this.radiusMaxValue])
        .range([this.minRadius, this.maxRadius]);
    },

    radius(radiusColumnValue: number) : number {
      return this.radiusScale()(radiusColumnValue);
    },
  },
});
</script>
