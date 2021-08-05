import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from '~/navigation/MainStack';
import {SafeAreaView} from 'react-native';
import {LoginScreen, FeedScreen} from './screens';
const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <LoginScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
};
export default App;
