import { MutationTree } from 'vuex';
import { RootState } from './RootState';

export enum Mutations {
  SET_DATA = 'setData',
}

export const mutations: MutationTree<RootState> = {
  [Mutations.SET_DATA](state, payload) : void {
    console.log('🚀 ~ file: mutations.ts ~ line 15 ~ payload', payload);
    state.data = payload;
  },
};
