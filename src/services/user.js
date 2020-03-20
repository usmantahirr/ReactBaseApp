import API from '../api';
import { USERS, USERS_BY_ID } from '../api/endpoints';

const api = new API();

export const getAllUsers = async filters =>
  api.get(USERS, undefined, filters).then(
    res => res,
    error => {
      throw error;
    }
  );

export const getUser = async userId =>
  api.get(USERS_BY_ID(userId)).then(
    res => res,
    error => {
      throw error;
    }
  );
