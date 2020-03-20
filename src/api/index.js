import axios from 'axios';

import { successResponseHandler, errorResponseHandler } from './interceptors';
import { BASE_URL } from './endpoints';

const contentType = {
  json: 'application/json',
  multipart: 'multipart/form-data',
};

export default class API {
  constructor(
    config = {
      headers: { contentType: contentType.json },
    }
  ) {
    this.config = {};
    this.instance = null;

    this.config = {
      baseURL: config.baseURL || BASE_URL,
      headers: {
        'Content-Type': config.headers.contentType || contentType.json,
      },
      timeout: 3000,
    };

    this.instance = axios.create(this.config);
    this.instance.interceptors.response.use(successResponseHandler, errorResponseHandler);
  }

  get(url, id, params) {
    let endpoint = url;
    if (id) {
      endpoint += `/${id}`;
    }
    return this.instance.get(endpoint, { params });
  }

  post(url, body) {
    return this.instance.post(url, body);
  }

  delete(url, id) {
    return this.instance.delete(`${url}/${id}`);
  }

  put(url, body, id) {
    let endpoint = url;
    if (id) {
      endpoint += `/${id}`;
    }
    return this.instance.put(endpoint, body);
  }

  patch(url, body) {
    return this.instance.patch(url, body);
  }
}
