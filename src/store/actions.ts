import { ActionTree } from 'vuex';
import { RootState } from './RootState';

export enum Actions {
  SET_COUNT = 'setCount',
}

export const actions: ActionTree<RootState, RootState> = {
  [Actions.SET_COUNT](context, payload) : void {
    context.commit('setCount', payload);
  },
};
