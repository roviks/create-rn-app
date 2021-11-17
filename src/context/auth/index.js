import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = React.createContext();

const initialLoginState = {
  isLoading: true,
  userName: null,
  userToken: null,
};

const loginReducer = (prevState, action) => {
  switch (action.type) {
    case 'RETRIVE_TOKEN':
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case 'SIGNUP':
      return {
        ...prevState,
        userName: action.id,
        userToken: action.token,
        isLoading: false,
      };
    case 'SIGNIN':
      return {
        ...prevState,
        userName: action.id,
        userToken: action.token,
        isLoading: false,
      };
    case 'SIGNOUT':
      return {
        ...prevState,
        userName: null,
        userToken: null,
        isLoading: false,
      };
  }
};

export const F = () => {
  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      signUp: (userName, password) => {
        let userToken;
        userToken = null;
        if (userName === '+998935774370' && password === 'pass') {
          userToken = 'dfgdfg';
        }
        dispatch({type: 'SIGNUP', id: userName, token: userToken});
      },
      signIn: async ({userName, userToken}) => {
        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch (error) {
          alert(error);
        }
        dispatch({type: 'SIGNIN', id: userName, token: userToken});
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (error) {
          alert(error);
        }
        dispatch({type: 'SIGNOUT'});
      },
    }),
    [],
  );
  return [loginState, dispatch, authContext];
};

export const AuthProvider = ({children, ...props}) => {
  return <AuthContext.Provider {...props}>{children}</AuthContext.Provider>;
};
