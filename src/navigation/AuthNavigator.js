import React from 'react';

import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import {LOGIN, REGISTER} from '~/constants/routeNames';
import Login from '~/screens/Login';
import Register from '~/screens/Register';

const AuthStack = createStackNavigator();

const forFade = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const AuthNavigator = ({navigation}) => (
  <AuthStack.Navigator
    initialRouteName={LOGIN}
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: forFade,
    }}>
    <AuthStack.Screen name={LOGIN} component={Login} />
    <AuthStack.Screen name={REGISTER} component={Register} />
  </AuthStack.Navigator>
);

export default AuthNavigator;
