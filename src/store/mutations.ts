import { MultivariateDataset } from '@/models/MultivariateDataset';
import { MutationTree } from 'vuex';
import { RootState } from './RootState';

export enum Mutations {
  SET_DATA = 'setData',
  SET_SELECTED_ELEMENT_ID = 'setSelectedElementId',
}

export const mutations: MutationTree<RootState> = {
  [Mutations.SET_DATA](state, payload: MultivariateDataset) : void {
    state.data = payload;
  },

  [Mutations.SET_SELECTED_ELEMENT_ID](state, payload: string) : void {
    state.selectedElementId = payload;
  },
};
