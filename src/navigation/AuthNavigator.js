import React from 'react';

import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const forFade = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const AuthNavigator = ({navigation}) => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: forFade,
    }}></AuthStack.Navigator>
);

export default AuthNavigator;
