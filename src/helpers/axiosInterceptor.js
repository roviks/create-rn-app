import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as axiosLib from 'axios';

import envs from '~/config/env';
import {GlobalContext} from '~/context/Provider';

const useAxios = () => {
  const {languageState} = React.useContext(GlobalContext);
  let headers = {Lang: languageState};

  const axios = axiosLib.create({
    baseURL: envs.BACKEND_URL,
    headers,
  });
  axios.interceptors.request.use(
    async config => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );
  return axios;
};

export default useAxios;
