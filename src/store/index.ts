import { createStore } from 'vuex';

const defaultState = {
  count: 0,
};

export default createStore({
  state() {
    return defaultState;
  },
  mutations: {
    increment(state: typeof defaultState) {
      // eslint-disable-next-line no-plusplus, no-param-reassign
      state.count++;
    },
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count;
    },
  },
});
