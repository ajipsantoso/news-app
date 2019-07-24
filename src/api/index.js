import axios from 'axios';
import news from './news';

export const ApiKey = `7192382c81174559a927e37d61fec5d2`;
export const NewsApi = axios.create({
  baseURL: `https://news.warsono.id/api/v1/`,
  timeout: 12000
});

export default {
  news
};
