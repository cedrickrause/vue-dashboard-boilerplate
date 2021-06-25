import * as d3 from 'd3';
import { ActionTree } from 'vuex';
import { RootState } from './RootState';

export enum Actions {
  SET_COUNT = 'setCount',
  LOAD_DATA = 'loadData',
}

export const actions: ActionTree<RootState, RootState> = {
  [Actions.SET_COUNT](context, payload) : void {
    context.commit('setCount', payload);
  },

  [Actions.LOAD_DATA](context, payload) : void {
    d3.csv(payload).then((loadedData) => context.commit('setData', loadedData));
  },
};
