import { ExampleGraphTransformerImpl } from '@/transformer/ExampleGraphTransformer';
import { MtCarsTransformerImpl } from '@/transformer/MtCarsTransformer';
import { ActionTree } from 'vuex';
import { Getters } from './getters';
import { Mutations } from './mutations';
import { RootState } from './RootState';

export enum Actions {
  LOAD_DATA = 'loadData',
  LOAD_GRAPH = 'loadGraph',
  SELECT_ELEMENT = 'selectElement',
}

export const actions: ActionTree<RootState, RootState> = {
  async [Actions.LOAD_DATA](context, payload) : Promise<void> {
    const transformedData = await MtCarsTransformerImpl.instance.transform(payload);
    context.commit(Mutations.SET_DATA, transformedData);
  },
  async [Actions.LOAD_GRAPH](context, payload) : Promise<void> {
    const transformedData = await ExampleGraphTransformerImpl.instance.transform(payload);
    context.commit(Mutations.SET_GRAPH, transformedData);
  },
  [Actions.SELECT_ELEMENT](context, payload): void {
    if (context.getters[Getters.GET_SELECTED_ELEMENT_ID] !== payload) {
      context.commit(Mutations.SET_SELECTED_ELEMENT_ID, payload);
    } else {
      context.commit(Mutations.SET_SELECTED_ELEMENT_ID, null);
    }
  },
};
