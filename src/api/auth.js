import { ApiHead } from './index';

export default {
  login(credentials) {
    return ApiHead.post(`/auth/login`, credentials);
  },
  register(data) {
    return ApiHead.post(`/auth/register`, data);
  },
  logout() {
    return ApiHead.get(`/auth/logout`)
  },
  me(){
    return ApiHead.get(`/auth/me`);
  }
};
