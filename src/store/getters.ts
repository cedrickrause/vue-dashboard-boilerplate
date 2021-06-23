import { GetterTree } from 'vuex';
import { RootState } from './RootState';

export enum Getters {
  GET_COUNT = 'getCount',
}

export const getters: GetterTree<RootState, RootState> = {
  [Getters.GET_COUNT](state) : number {
    return state.count;
  },
};
