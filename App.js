import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import GlobalContextProvider from '~/context/Provider';
import AppNavContainer from '~/navigation/index';
import {COLORS} from '~/constants/theme';
import {Linking, StatusBar} from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider style={{backgroundColor: COLORS.backgroundColor}}>
      <StatusBar
        backgroundColor="rgba(255,0,0,0)"
        barStyle="light-content"
        translucent={true}
      />
      <GlobalContextProvider>
        <AppNavContainer />
      </GlobalContextProvider>
    </SafeAreaProvider>
  );
};

export default App;
