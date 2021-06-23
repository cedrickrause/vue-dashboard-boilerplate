import { MutationTree } from "vuex";
import { State } from "./types";

export enum Mutations {
  SET_COUNT = "setCount",
}

export const mutations: MutationTree<State> = {
  [Mutations.SET_COUNT](state, payload) {
    state.count = payload;
  },
};