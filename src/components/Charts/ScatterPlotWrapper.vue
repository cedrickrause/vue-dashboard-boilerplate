<template>
  <div>
      <b-container>
        <b-form-row>
          <b-col>
            <b-form-group
              id="input-group-1"
              label="X-Axis:"
              label-for="xAxisInput"
            >
              <b-form-select
                id="xAxisInput"
                v-model="xAxisColumn"
                :options="dataset.columns"
                required></b-form-select>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              id="input-group-2"
              label="Y-Axis:"
              label-for="yAxisInput"
            >
              <b-form-select
                id="yAxisInput"
                v-model="yAxisColumn"
                :options="dataset.columns"
                required></b-form-select>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              id="input-group-3"
              label="Radius:"
              label-for="radiusInput"
            >
              <b-form-select
                id="radiusInput"
                v-model="radiusColumn"
                :options="dataset.columns"
                required></b-form-select>
            </b-form-group>
          </b-col>
        </b-form-row>
      </b-container>

    <scatter-plot v-if="this.xAxisColumn && this.yAxisColumn && this.radiusColumn"
    :dataset="dataset"
    :xAxisColumn="xAxisColumn"
    :yAxisColumn="yAxisColumn"
    :radiusColumn="radiusColumn" />
  </div>
</template>
<script lang="ts">
import { MultivariateDataset } from '@/models/MultivariateDataset';
import Vue from 'vue';
import ScatterPlot from './ScatterPlot.vue';

export default Vue.extend({
  components: { ScatterPlot },
  props: {
    dataset: {
      type: Object as () => MultivariateDataset,
    },
  },
  data() {
    return {
      xAxisColumn: '',
      yAxisColumn: '',
      radiusColumn: '',
    };
  },
});
</script>
