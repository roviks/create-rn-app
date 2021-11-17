import React, {createContext, useReducer} from 'react';
import i18n from 'i18n-js';

import authInitialState from './initialsStates/auth';
import authReducer from './reducers/auth';
import languageInitialState from './initialsStates/language';
import languageReducer from './reducers/language';
import en from '~/localization/en';
import uzK from '~/localization/uz-k';
import uzL from '~/localization/uz-l';
import ru from '~/localization/ru';
export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [isInternetReachable, setIsInternetReachable] = React.useState(true);
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [languageState, languageDispatch] = useReducer(
    languageReducer,
    languageInitialState,
  );
  i18n.fallbacks = true;
  i18n.translations = {en, uzK, uzL, ru};

  const localizationContext = React.useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, {locale: languageState, ...options}),
    }),
    [languageState],
  );

  return (
    <GlobalContext.Provider
      value={{
        authState,
        authDispatch,
        languageState,
        languageDispatch,
        localizationContext,
        isInternetReachable,
        setIsInternetReachable,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
