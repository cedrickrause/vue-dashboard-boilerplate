<template>
  <div>
    <b-form-select v-model="xAxisColumn" :options="dataset.columns"></b-form-select>
    <b-form-select v-model="yAxisColumn" :options="dataset.columns"></b-form-select>
    <b-form-select v-model="radiusColumn" :options="dataset.columns"></b-form-select>
    <b-button variant="primary" v-on:click="fire()">Go</b-button>
    <scatter-plot v-if="go"
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
      go: false,
      xAxisColumn: null,
      yAxisColumn: null,
      radiusColumn: null,
    };
  },
  methods: {
    fire() {
      this.go = true;
    },
  },
});
</script>
