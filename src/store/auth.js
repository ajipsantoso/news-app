import api, {setAccessToken} from '../api';
import token from '../utils/token'

export default {
  state: {
    user: null,
    token: token.get()
  },
  mutations: {
    set_user(state, data) {
      state.user = data;
    },
    set_token(state, token) {
      state.token = token;
    }
  },
  actions: {
    login({ commit }, credentials) {
      return api.auth
        .login(credentials)
        .then(({ data, status }) => {
          console.log('this is sttus',status)
          if (status === 200) {
            setAccessToken(data.data.access_token);
            token.set(data.data.access_token);
            commit('set_user', data.data);
            commit('set_token', data.data.access_token);
            return data.data;
          }
          else {
            return false
          }
        })
        .catch(err => {
          return false;
        });
    },
    register({ commit }, credentials) {
        return api.auth
          .register(credentials)
          .then(({ data }) => {
            console.log(data)
            setAccessToken(data.data.access_token);
            token.set(data.data.access_token);
            commit('set_user', data.data);
            commit('set_token', data.data.access_token);
            return data;
          })
          .catch(err => {
            return false;
          });
      }
  },
  getters: {
    user: state => state.user
  }
};
