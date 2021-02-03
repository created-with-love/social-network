import axios from 'axios';

const BASE_URL = 'https://social-network.samuraijs.com/api/1.0/';

export const getData = params => {
  return axios.get(`${BASE_URL}${params}`).then(response => response.data);
};
