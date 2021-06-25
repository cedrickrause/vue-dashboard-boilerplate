import { MutationTree } from 'vuex';
import { RootState } from './RootState';

export enum Mutations {
  SET_DATA = 'setData',
}

export const mutations: MutationTree<RootState> = {
  [Mutations.SET_DATA](state, payload) : void {
    state.data = payload;
  },
};
