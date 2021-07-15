<template>
  <div class="scatterplot" ref="root">
    <svg class="scatterplot-svg" :viewBox="`0 0 ${this.width} ${this.height}`">
      <circle v-for="element in dataset.data" :key="element.id"
        :class="{ selectedElement: element.id === getSelectedElementId }"
        :cx="xPosition(element.values[xAxisColumn])"
        :cy="yPosition(element.values[yAxisColumn])"
        :r="radius(element.values[radiusColumn])"
        v-on:click="selectElement(element.id)"
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
import { BaseType, ScaleLinear } from 'd3';
import { MultivariateDataset } from '@/models/MultivariateDataset';
import { SvgSelection } from '@/models/SvgTypes';
import { mapActions, mapGetters } from 'vuex';
import { Getters } from '@/store/getters';
import { Actions } from '@/store/actions';

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
    ...mapGetters({
      getSelectedElementId: Getters.GET_SELECTED_ELEMENT_ID,
    }),

    xMaxValue(): number {
      return Math.max(...this.dataset.data.map(
        (entry) => entry.values[this.xAxisColumn],
      ));
    },

    yMaxValue(): number {
      return Math.max(...this.dataset.data.map(
        (entry) => entry.values[this.yAxisColumn],
      ));
    },

    radiusMaxValue(): number {
      return Math.max(...this.dataset.data.map(
        (entry) => entry.values[this.radiusColumn],
      ));
    },
  },

  methods: {
    ...mapActions({
      selectElement: Actions.SELECT_ELEMENT,
    }),

    createXAxis() {
      const g : SvgSelection = d3.select(this.$refs.root as BaseType)
        .select('.xAxis');
      g.attr('transform', `translate(0, ${this.height - this.margin.bottom})`)
        .call(d3.axisBottom(this.xScale()));
    },

    createYAxis() {
      const g : SvgSelection = d3.select(this.$refs.root as BaseType)
        .select('.yAxis');
      g.attr('transform', `translate(${this.margin.left}, 0)`)
        .call(d3.axisLeft(this.yScale()));
    },

    xScale() : ScaleLinear<number, number, never> {
      return d3.scaleLinear()
        .domain([0, this.xMaxValue * this.axisLengthOverMaxValueFactor])
        .range([this.margin.left, this.width - this.margin.right]);
    },

    xPosition(xAxisColumnValue: number) : number {
      return this.xScale()(xAxisColumnValue);
    },

    yScale() : ScaleLinear<number, number, never> {
      return d3.scaleLinear()
        .domain([0, this.yMaxValue * this.axisLengthOverMaxValueFactor])
        .range([this.height - this.margin.bottom, this.margin.top]);
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

<style lang="scss" scoped>
@import '@/style/custom.scss';

circle:hover {
  stroke: $primary;
  stroke-width: 3px;
}

circle.selectedElement {
  fill: $primary;
}
</style>
