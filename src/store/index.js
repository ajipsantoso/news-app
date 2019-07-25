import Vue from 'vue';
import Vuex from 'vuex';
import news from './news';
import auth from './auth';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    news,
    auth
  },
  state: {},
  mutations: {},
  actions: {}
});
