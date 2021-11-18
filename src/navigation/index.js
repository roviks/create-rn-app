import React, {useContext, useState} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';

import AuthNavigator from '~/navigation/AuthNavigator';

import {GlobalContext} from '~/context/Provider';
import {COLORS} from '~/constants/theme';
import setLoggedIn from '~/context/actions/auth/setLoggedIn';

const AppNavContainer = () => {
  const {authState, authDispatch, isInternetReachable, setIsInternetReachable} =
    useContext(GlobalContext);
  const [isAuthenticated, setIsAuthenticated] = useState(authState.isLoggedIn);
  const [authLoaded, setAuthLoaded] = useState(false);

  React.useEffect(() => {
    const unsubs = NetInfo.addEventListener(state => {
      return setIsInternetReachable(state.isInternetReachable);
    });
    return () => unsubs();
  }, []);

  React.useEffect(() => {
    if (authLoaded) {
      // SplashScreen.hide();
    }
  }, [authLoaded]);

  const getUser = async () => {
    try {
      const isLogged = await AsyncStorage.getItem('isLoggedIn');
      if (isLogged) {
        setIsAuthenticated(true);
        setLoggedIn(true)(authDispatch);
      } else {
        setIsAuthenticated(false);
        setLoggedIn(false)(authDispatch);
      }
      setAuthLoaded(true);
    } catch (error) {}
  };

  React.useEffect(() => {
    getUser();
  }, [authState.isLoggedIn]);

  if (isInternetReachable) {
    return (
      <View>
        <Text>GG</Text>
      </View>
    );
  } else {
    return (
      <NavigationContainer>
        <View style={{flex: 1, backgroundColor: COLORS.backgroundColor}}>
          {isAuthenticated ? null : <AuthNavigator />}
        </View>
      </NavigationContainer>
    );
  }
};

export default AppNavContainer;
