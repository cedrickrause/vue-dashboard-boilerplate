import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import state from './state';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';
import { State } from './types';

Vue.use(Vuex);

const store: StoreOptions<State> = {
  state,
  getters,
  mutations,
  actions,
};

export default new Vuex.Store<State>(store);
