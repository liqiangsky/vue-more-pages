import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    val: 200,
  },
  mutations: {},
  getters: {
    value: (state) => state.val,
  },
  actions: {},
});

export default store;
