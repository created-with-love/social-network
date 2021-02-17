import axios from 'axios';

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
    return instance.post(`follow/${userId}`).then(response => {
      // console.log(response);
      return response.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const unfollowUser = userId => {
  try {
    return instance.delete(`follow/${userId}`).then(response => {
      return response.data;
    });
  } catch (error) {
    console.log(error);
  }
};

// status - JSON object
export const updateMyStatus = status => {
  return instance.put(`profile/status`, { status }).then(response => {
    return response.data;
  });
};
