<template>
  <div class="bootstrap-test">
    <b-button variant="primary" v-on:click="setCountAction(10)">Button</b-button>
    <div>{{getCount}}</div>
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
    ...mapGetters({getCount: Getters.GET_COUNT}),
  },

  methods: {
    ...mapMutations({ setCount: Mutations.SET_COUNT }),
    ...mapActions({ setCountAction: Actions.SET_COUNT}),
  }

});
</script>
