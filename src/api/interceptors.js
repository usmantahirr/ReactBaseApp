import { get } from 'lodash-es';
import errorObject from './errorObject';

export const errorResponseHandler = async error => {
  let { message } = error;

  if (error && (get(error, 'status') === 403 || get(error, 'response.status') === 403)) {
    message = "You're UnAuthorized, check login or user privileges";
  }

  if (error && (get(error, 'status') === 404 || get(error, 'response.status') === 404)) {
    message = 'Not Found';
  }

  if (error && (get(error, 'status') === 503 || get(error, 'response.status')) === 503) {
    message = 'Internal Server Error';
  }

  if (error) {
    error.message = message;
    throw errorObject(error);
  }
};

export function successResponseHandler(response) {
  const data = get(response, 'data');

  const pageDetails = {
    page: data.page,
    total: data.total,
    total_pages: data.total_pages,
    per_page: data.per_page,
  };

  return {
    ...response,
    data: response.data.data,
    pageDetails,
  };
}
