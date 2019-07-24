import { NewsApi, ApiKey } from './index';

export default {
  allNews({ page, sortBy, descending, search }) {
    return NewsApi.get(`/posts`, {
      params: {
        page: page || 1,
        sortBy: sortBy || 'id',
        descending: descending || 1,
        search: search
      }
    });
  },
  headlineNewsCategory(category) {
    return NewsApi.get(`country=id&category=${category}&apiKey=${ApiKey}`);
  }
};
