import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import state from './state';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';
import { RootState } from './RootState';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state,
  getters,
  mutations,
  actions,
};

export default new Vuex.Store<RootState>(store);
