<template>
  <div class="bootstrap-test">
    <b-button variant="primary" v-on:click="loadData('./data/mtcars.csv')">Load data</b-button>
    <div>{{getData}}</div>
  </div>
</template>

<script lang="ts">
import { Actions } from '@/store/actions';
import { Getters } from '@/store/getters';
import { Mutations } from '@/store/mutations';
import Vue from 'vue';
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default Vue.extend({

  computed: {
    ...mapGetters({
      getCount: Getters.GET_COUNT,
      getData: Getters.GET_DATA,
    }),
  },

  methods: {
    ...mapMutations({ setCount: Mutations.SET_COUNT }),
    ...mapActions({ loadData: Actions.LOAD_DATA }),
  },

});
</script>
