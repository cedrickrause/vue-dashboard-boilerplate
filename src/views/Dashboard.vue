<template>
  <div class="dashboard">
    <b-container fluid>
      <b-row>
        <b-col>
          <b-card>
            <scatter-plot-wrapper v-if="getData" :dataset="getData" />
          </b-card>
        </b-col>
        <b-col>
          <b-card>
            <scatter-plot v-if="getData"
              :dataset="getData"
              :xAxisColumn="'mpg'"
              :yAxisColumn="'hp'"
              :radiusColumn="'disp'" />
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import ScatterPlotWrapper from '@/components/Charts/ScatterPlotWrapper.vue';
import ScatterPlot from '@/components/Charts/ScatterPlot.vue';
import { Actions } from '@/store/actions';
import { Getters } from '@/store/getters';
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';

export default Vue.extend({
  components: { ScatterPlot, ScatterPlotWrapper },
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
