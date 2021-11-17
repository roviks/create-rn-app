import {
  CLEAR_AUTH_STATE,
  LOGGED_IN,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '~/constants/actionTypes';

const auth = (state, action) => {
  switch (action.type) {
    case REGISTER_LOADING:
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_USER:
      return {...state, loading: false, data: null, isLoggedIn: false};
    case REGISTER_SUCCESS:
      return {...state, loading: false, data: action.payload};
    case LOGIN_SUCCESS:
      return {...state, data: action.payload, isLoggedIn: true};
    case LOGGED_IN:
      return {...state, loading: false, isLoggedIn: action.payload};
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {...state, loading: false, error: action.payload};
    case CLEAR_AUTH_STATE:
      return {...state, loading: false, data: null, error: null};
    default:
      return state;
  }
};

export default auth;
