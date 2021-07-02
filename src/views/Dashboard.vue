<template>
  <div class="dashboard">
    <scatter-plot-wrapper v-if="getData" :dataset="getData" />
  </div>
</template>

<script lang="ts">
import ScatterPlotWrapper from '@/components/Charts/ScatterPlotWrapper.vue';
import { Actions } from '@/store/actions';
import { Getters } from '@/store/getters';
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

export default Vue.extend({
  components: { ScatterPlotWrapper },
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
