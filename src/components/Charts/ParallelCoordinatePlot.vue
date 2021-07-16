<template>
  <div class="parallel-coordinate-plot" ref="root">
    <svg class="parallel-coordinate-plot-svg" :viewBox="`0 0 ${this.width} ${this.height}`">
        <path v-for="element in dataset.data" :key="element.id"
        :class="{ selectedElement: element.id === getSelectedElementId }"
        :d="calculateLine(element)"
        stroke="black"
        stroke-width="1px"
        fill="none"
        opacity="0.5"
        />
        <rect v-for="(column, columnIndex) in columns" :key="column + 'rect'"
        :x="xPosition(columnIndex)"
        :y="margin.top"
        :width="barWidth"
        :height="height - margin.top - margin.bottom"
        />
    </svg>
  </div>
</template>

<script lang="ts">
import * as d3 from 'd3';
import Vue, { PropType } from 'vue';
import { MultivariateDataset, MultivariateDatasetEntry } from '@/models/MultivariateDataset';
import { ScaleLinear } from 'd3';
import { D3MultiScale, LineCoordinates } from '@/helpers/d3helpers';
import { mapGetters } from 'vuex';
import { Getters } from '@/store/getters';

export default Vue.extend({
  props: {
    dataset: {
      type: Object as () => MultivariateDataset,
    },
    columns: {
      type: Array as PropType<string[]>,
    },
  },

  data() {
    return {
      height: 600,
      width: 800,
      margin: {
        top: 40, right: 40, bottom: 40, left: 40,
      },
      barWidth: 5,
    };
  },

  computed: {
    ...mapGetters({
      getSelectedElementId: Getters.GET_SELECTED_ELEMENT_ID,
    }),

    valueColumns(): Array<string> {
      return this.columns.filter((column) => column !== this.dataset.idColumn);
    },

    yScales(): D3MultiScale {
      const scales: D3MultiScale = {};
      this.valueColumns.forEach((column: string) => {
        const max = Math.max(...this.dataset.data.map(
          (entry) => +entry.values[column],
        ));
        const min = Math.min(...this.dataset.data.map(
          (entry) => +entry.values[column],
        ));

        const scale = d3.scaleLinear()
          .domain([min, max])
          .range([this.height - this.margin.bottom, this.margin.top]);
        scales[column] = scale;
      });
      return scales;
    },

    xScale() : ScaleLinear<number, number, never> {
      return d3.scaleLinear()
        .domain([0, this.valueColumns.length - 1])
        .range([this.margin.left, this.width - this.margin.right - this.barWidth]);
    },
  },

  methods: {
    calculateLine(entry: MultivariateDatasetEntry) {
      const points: LineCoordinates = [];
      this.valueColumns.forEach((column: string, columnIndex: number) => {
        points.push([this.xScale(columnIndex), this.yScales[column](entry.values[column])]);
      });
      return d3.line()(points);
    },

    xPosition(columnIndex: number) : number {
      return this.xScale(columnIndex);
    },

    yPosition(yAxisColumnValue: number, column: string) : number {
      return this.yScales[column](yAxisColumnValue);
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

path.selectedElement {
  stroke: $primary;
  stroke-width: 3px;
  opacity: 1;
}
</style>
