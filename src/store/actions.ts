import { ActionContext, ActionTree } from "vuex";
import { State } from "./types";

export enum Actions {
  SET_COUNT = 'setCount',
}

export const actions: ActionTree<State, State> = {
  [Actions.SET_COUNT](context, payload) : void {
    context.commit('setCount', payload);
  }
};