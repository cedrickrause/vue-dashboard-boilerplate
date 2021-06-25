import { GetterTree } from 'vuex';
import { RootState } from './RootState';

export enum Getters {
  GET_DATA = 'getData',
}

export const getters: GetterTree<RootState, RootState> = {
  [Getters.GET_DATA](state) : unknown {
    return state.data;
  },
};
