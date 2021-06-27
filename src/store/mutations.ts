import { MultivariateDataset } from '@/models/MultivariateDataset';
import { MutationTree } from 'vuex';
import { RootState } from './RootState';

export enum Mutations {
  SET_DATA = 'setData',
}

export const mutations: MutationTree<RootState> = {
  [Mutations.SET_DATA](state, payload: MultivariateDataset) : void {
    state.data = payload;
  },
};
