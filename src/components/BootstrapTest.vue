<template>
  <div class="bootstrap-test">
    <b-button variant="primary" v-on:click="loadData('./data/mtcars.csv')">Load data</b-button>
    <div>{{ getData ? getData[0] : getData }}</div>
  </div>
</template>

<script lang="ts">
import { Actions } from '@/store/actions';
import { Getters } from '@/store/getters';
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({

  computed: {
    ...mapGetters({
      getData: Getters.GET_DATA,
    }),
  },

  methods: {
    ...mapActions({ loadData: Actions.LOAD_DATA }),
  },

});
</script>
