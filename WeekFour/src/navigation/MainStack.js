import React from 'react';
import {mainStack} from '~/config/navigators';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTabs from './HomeTabs';
import {Loading, LoginScreen, RegisterScreen, WelcomeScreen} from '~/screens';
const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={mainStack.loading}
      screenOptions={{gestureEnabled: false, headerShown: false}}>
      <Stack.Screen name={mainStack.loading} component={Loading} />
      <Stack.Screen name={mainStack.welcome} component={WelcomeScreen} />
      <Stack.Screen name={mainStack.login} component={LoginScreen} />
      <Stack.Screen name={mainStack.register} component={RegisterScreen} />
      <Stack.Screen name={mainStack.home_tab} component={HomeTabs} />
    </Stack.Navigator>
  );
};

export default MainStack;
