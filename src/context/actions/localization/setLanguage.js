import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {LANGUAGE_DATA} from '~/constants/actionTypes';

export default language => dispatch => {
  dispatch({
    type: LANGUAGE_DATA,
    payload: language,
  });
  AsyncStorage.setItem('lang', language);

  AsyncStorage.getItem('token')
    .then(res => {
      axios.patch(
        'auth/updateMe',
        {lang: language},
        {
          headers: {
            Authorization: `Bearer ${res}`,
          },
        },
      );
    })
    .catch(err => {
      console.log('Error setLanguage:', err);
    });
};
