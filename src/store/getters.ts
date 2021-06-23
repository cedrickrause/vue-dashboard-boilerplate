import { GetterTree } from "vuex";
import { State } from "./types";

export enum Getters {
  GET_COUNT = 'getCount',
}

export const getters: GetterTree<State, State> = {
  [Getters.GET_COUNT](state) : number {
    return state.count;
  }
}


