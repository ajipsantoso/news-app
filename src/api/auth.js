import { ApiHead } from './index';

export default {
  login(credentials) {
    return ApiHead.post(`/auth/login`, credentials);
  },
  register(data) {
    return ApiHead.post(`/auth/register`, data);
  },
  me(data){
    return ApiHead.get(`/auth/me`);
  }
};
