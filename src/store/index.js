import Vue from 'vue';
import Vuex from 'vuex';
import Artigos from '../app/Artigos';

Vue.use(Vuex);
const logger = console;
const artigos = new Artigos(logger);

export default new Vuex.Store({
  state: {
    articles: [],
  },
  mutations: {
    changeArticles(state, articles) {
      state.articles = articles;
    },
  },
  actions: {
    async getArticles({ commit }) {
      const list = await artigos.list();
      commit('changeArticles', list);
    },
  },
  modules: {
  },
});
