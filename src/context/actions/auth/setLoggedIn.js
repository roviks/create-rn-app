import {LOGGED_IN} from '~/constants/actionTypes';

export default isLoggedIn => dispatch => {
  dispatch({
    type: LOGGED_IN,
    payload: isLoggedIn,
  });
};
