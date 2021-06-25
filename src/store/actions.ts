import * as d3 from 'd3';
import { ActionTree } from 'vuex';
import { RootState } from './RootState';

export enum Actions {
  LOAD_DATA = 'loadData',
}

export const actions: ActionTree<RootState, RootState> = {
  [Actions.LOAD_DATA](context, payload) : void {
    d3.csv(payload).then((loadedData) => context.commit('setData', loadedData));
  },
};
