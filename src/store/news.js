import api from '../api';

export default {
  state: {
    news: null,
    allNews: [],
    headline: [],
    error: null
  },
  mutations: {
    set_allNews(state, news) {
      state.allNews = news;
    }
  },
  actions: {
    allNewsGet({ commit }, params) {
      return api.news
        .allNews(params)
        .then(({ data }) => {
          // console.log('uhuy',data.data)
          commit('set_allNews', data.data);
          // commit('')
        })
        .catch(err => {
          return err;
        });
    }
  },
  getters: {
    allNews: state => state.allNews
  }
};
