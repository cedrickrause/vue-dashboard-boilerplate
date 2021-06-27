<template>
  <div class="dashboard">
    <bootstrap-test />
    <scatter-plot :data="getData" :xAxisColumn="'mpg'" :yAxisColumn="'disp'" :radiusColumn="'hp'"/>
  </div>
</template>

<script lang="ts">
import BootstrapTest from '@/components/BootstrapTest.vue';
import ScatterPlot from '@/components/Charts/ScatterPlot.vue';
import { Actions } from '@/store/actions';
import { Getters } from '@/store/getters';
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

export default Vue.extend({
  components: { BootstrapTest, ScatterPlot },
  name: 'Dashboard',

  mounted() {
    this.loadData('./data/mtcars.csv');
  },

  computed: {
    ...mapGetters({ getData: Getters.GET_DATA }),
  },

  methods: {
    ...mapActions({ loadData: Actions.LOAD_DATA }),
  },
});
</script>
