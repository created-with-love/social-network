import axios from 'axios';

const BASE_URL = 'https://social-network.samuraijs.com/api/1.0/';

export const getData = params => {
  return axios.get(`${BASE_URL}${params}`).then(response => response.data);
};

export const followUser = userId => {
  return axios
    .post(`${BASE_URL}/follow/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'API-KEY': process.env.API_KEY,
        // credentials:
      },
    })
    .then(response => {
      console.log(response.data);
    });
};

export const unfollowUser = userId => {
  return axios.delete(`${BASE_URL}/follow/${userId}`).then(response => {
    console.log(response.data);
  });
};
