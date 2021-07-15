import { MultivariateDataset } from '@/models/MultivariateDataset';
import { GetterTree } from 'vuex';
import { RootState } from './RootState';

export enum Getters {
  GET_DATA = 'getData',
  GET_SELECTED_ELEMENT_ID = 'getSelectedElementId',
}

export const getters: GetterTree<RootState, RootState> = {
  [Getters.GET_DATA](state) : MultivariateDataset | null {
    return state.data;
  },

  [Getters.GET_SELECTED_ELEMENT_ID](state) : string | null {
    return state.selectedElementId;
  },
};
