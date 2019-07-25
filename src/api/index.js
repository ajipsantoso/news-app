import axios from 'axios';
import news from './news';
import auth from './auth';
import token from '../utils/token'

export const ApiKey = `7192382c81174559a927e37d61fec5d2`;
export const ApiHead = axios.create({
  baseURL: `https://news.warsono.id/api/v1/`,
  timeout: 12000
});

export const setAccessToken = token => {
  console.log('settingTOKENaxios');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  ApiHead.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  console.log(ApiHead.defaults.headers)
}

if (token.exists()){
  console.log('settingTOKEN');
  setAccessToken(token.get());
}

export default {
  news,
  auth
};
