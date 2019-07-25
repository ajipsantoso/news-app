import { ApiHead } from './index';

export default {
  allNews({ page, sortBy, descending, search }) {
    return ApiHead.get(`/posts`, {
      params: {
        page: page || 1,
        sortBy: sortBy || 'id',
        descending: descending || 1,
        search: search
      }
    });
  },
  newsById(id) {
    return ApiHead.get(`/posts/${id}`);
  },
  createNews(data) {
    return ApiHead.get(`/posts`, data);
  }
};
