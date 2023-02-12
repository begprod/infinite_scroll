import { apiClient } from './api.js';

/**
  * Get users from API
  * @param {number} page - Page number
  * @param {number} results - Number of results per page
  * @returns {Promise} - Promise object represents the response
  *
  * @example
  * getUsers(1, 10)
  *  .then(response => {
  *   console.log(response.data);
  * })
  * .catch(error => {
  *  console.log(error);
  * });
 */

export const getUsers = (page = 1, results = 10) => {
  return apiClient.get('/api', {
    params: {
      page: page,
      results: results
    }
  });
}
