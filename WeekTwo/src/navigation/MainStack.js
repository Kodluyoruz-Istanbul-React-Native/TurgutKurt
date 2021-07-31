import React from 'react';
import {mainStack} from '~/config/navigators';
import {createStackNavigator} from '@react-navigation/stack';
import {Loading} from '~/screens';
import HomeTabs from './HomeTabs';
const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={mainStack.loading}
      screenOptions={{gestureEnabled: false, headerShown: false}}>
      <Stack.Screen name={mainStack.loading} component={Loading} />
      <Stack.Screen name={mainStack.home_tab} component={HomeTabs} />
    </Stack.Navigator>
  );
};

export default MainStack;
