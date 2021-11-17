import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from '~/constants/actionTypes';
import axios from '~/helpers/axiosInterceptor';

export default ({password, userName}) =>
  dispatch => {
    dispatch({
      type: LOGIN_LOADING,
    });
    axios
      .post('auth/login', {
        password: password?.value,
        userName: userName?.value,
      })
      .then(({data, token, status}) => {
        AsyncStorage.setItem('token', token);
        AsyncStorage.setItem('user', JSON.stringify(data));
        AsyncStorage.setItem('isLoggedIn', 'true');

        dispatch({
          type: LOGIN_SUCCESS,
          payload: data,
        });
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response ? err.response.data : {error: 'Something'},
        });
      });
  };
