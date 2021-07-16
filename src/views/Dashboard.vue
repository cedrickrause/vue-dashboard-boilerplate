<template>
  <div class="dashboard">
    <b-container fluid>
      <b-row align-h="center">
        <b-col cols="3">
          <b-card
            title="Scatterplot with Wrapper">
            <scatter-plot-wrapper v-if="getData" :dataset="getData" />
          </b-card>
        </b-col>
        <b-col cols="3">
          <b-card
            title="Scatterplot without Wrapper">
            <scatter-plot v-if="getData"
              :dataset="getData"
              :xAxisColumn="'mpg'"
              :yAxisColumn="'hp'"
              :radiusColumn="'disp'" />
          </b-card>
        </b-col>
        <b-col cols="3">
          <b-card class="h-100"
            title="Parallel Coordinate Plot without Wrapper">
            <parallel-coordinate-plot v-if="getData"
              :dataset="getData"
              :columns="getData.columns" />
              <b-card-text>
                Because this card's content is smaller than the one with the wrapper,
                the class h-100 is added to make the card fill out the whole row height.
              </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="3">
          <scatter-plot v-if="getData"
            :dataset="getData"
            :xAxisColumn="'mpg'"
            :yAxisColumn="'hp'"
            :radiusColumn="'disp'" />
            <p>
              It is also possible to place a plot without using it as a card.
            </p>
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
import ParallelCoordinatePlot from '@/components/Charts/ParallelCoordinatePlot.vue';

export default Vue.extend({
  components: { ScatterPlot, ScatterPlotWrapper, ParallelCoordinatePlot },
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
