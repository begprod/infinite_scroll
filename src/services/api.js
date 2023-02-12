import axios from 'axios';

/**
 * This is the base URL, setups for the API.
 *
 * @example
 * apiClient.get('/api', {
 *  params: {
 *    param: 1,
 *  }
 * });
 */

export const apiClient = axios.create({
  baseURL: 'https://randomuser.me',
  defaultHeaders: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
});
