import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export interface IState {
  count: number,
}

export const mutations = {
  increment(state: IState) {
    state.count++
  },
}

const defaultState: IState = {
  count: 0,
}

const store = new Vuex.Store({
  state: defaultState,
  mutations,
})

export default store
