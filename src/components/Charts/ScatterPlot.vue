<template>
  <div class="scatterplot">
    <svg class="scatterplot-svg" :height="height" :width="width">
      <circle v-for="car in dataset.data" :key="car.model"
        :cx="xPosition(car[xAxisColumn])"
        :cy="yPosition(car[yAxisColumn])"
        :r="radius(car[radiusColumn])"
        />
    </svg>
  </div>
</template>

<script lang="ts">
import * as d3 from 'd3';
import Vue from 'vue';
import _ from 'lodash';
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

  computed: {
    xMaxValue(): number {
      return Math.max(..._.map(this.dataset.data,
        (entry) => parseFloat(entry[this.xAxisColumn]!)));
    },

    yMaxValue(): number {
      return Math.max(..._.map(this.dataset.data,
        (entry) => parseFloat(entry[this.yAxisColumn]!)));
    },

    radiusMaxValue(): number {
      return Math.max(..._.map(this.dataset.data,
        (entry) => parseFloat(entry[this.radiusColumn]!)));
    },
  },

  methods: {
    createXAxis() {
      d3.select('.scatterplot-svg')
        .append('g')
        .attr('class', 'xAxis')
        .attr('transform', `translate(0, ${this.height - this.margin.bottom})`)
        .call(this.xAxisGenerator());
    },

    createYAxis() {
      d3.select('.scatterplot-svg')
        .append('g')
        .attr('class', 'yAxis')
        .attr('transform', `translate(${this.margin.left}, 0)`)
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
        .domain([0, this.yMaxValue])
        .range([this.minRadius, this.maxRadius]);
    },

    radius(radiusColumnValue: number) : number {
      return this.radiusScale()(radiusColumnValue);
    },
  },
});
</script>
