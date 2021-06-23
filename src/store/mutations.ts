import { MutationTree } from 'vuex';
import { RootState } from './RootState';

export enum Mutations {
  SET_COUNT = 'setCount',
}

export const mutations: MutationTree<RootState> = {
  [Mutations.SET_COUNT](state, payload) {
    state.count = payload;
  },
};
