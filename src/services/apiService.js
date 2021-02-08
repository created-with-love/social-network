import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;
// const API_KEY = process.env.REACT_APP_API_KEY;

// credentials для post запроса идут третим параметром, для get/delete - вторым
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // если делать запросы без credentials - они будут идти от анонимного юзера
  withCredentials: true,
  headers: {
    'API-KEY': process.env.REACT_APP_API_KEY,
  },
});

export const getData = params => {
  try {
    return instance.get(`${params}`).then(response => response.data);
  } catch (error) {
    console.log(error);
  }
};

export const followUser = userId => {
  try {
    return instance.post(`${BASE_URL}follow/${userId}`).then(response => {
      console.log(response);
      return response.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const unfollowUser = userId => {
  try {
    return instance.delete(`${BASE_URL}follow/${userId}`).then(response => {
      console.log(response.data);
      return response.data;
    });
  } catch (error) {
    console.log(error);
  }
};
