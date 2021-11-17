import {LANGUAGE_DATA} from '~/constants/actionTypes';

const language = (state, action) => {
  switch (action.type) {
    case LANGUAGE_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default language;
