import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGOUT_USER} from '~/constants/actionTypes';

export default () => dispatch => {
  AsyncStorage.removeItem('token');
  AsyncStorage.removeItem('user');
  AsyncStorage.removeItem('isLoggedIn');
  dispatch({
    type: LOGOUT_USER,
  });
};
