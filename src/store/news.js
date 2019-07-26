import api from '../api';

export default {
  state: {
    news: null,
    allNews: [],
    headline: [],
    error: null
  },
  mutations: {
    set_allNews(state, allNews) {
      state.allNews = allNews;
    },
    set_news(state, news){
      state.news = news;
    }
  },
  actions: {
    allNewsGet({ commit }, params) {
      return api.news
        .allNews(params)
        .then(({ data }) => {
          console.log('uhuy',data.data)
          commit('set_allNews', data.data);
          // commit('')
        })
        .catch(err => {
          return err;
        });
    },
    newsById({ commit }, id) {
      return api.news
        .newsById(id)
        .then(({ data, status }) => {
          if (status === 200) {
            // console.log(data.data);
            commit('set_news',data.data);
            // return data
          }
        })
        .catch((err) => {

        })
    }
  },
  getters: {
    allNews: state => state.allNews,
    news: state => state.news
  }
};
