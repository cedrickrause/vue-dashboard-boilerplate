import { MtCarsTransformerImpl } from '@/transformer/MtCarsTransformer';
import { ActionTree } from 'vuex';
import { RootState } from './RootState';

export enum Actions {
  LOAD_DATA = 'loadData',
}

export const actions: ActionTree<RootState, RootState> = {
  async [Actions.LOAD_DATA](context, payload) : Promise<void> {
    const transformedData = await MtCarsTransformerImpl.instance.transform(payload);
    context.commit('setData', transformedData);
  },
};
