import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from '~/navigation/MainStack';
import {SafeAreaView} from 'react-native';
const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <MainStack />
      </SafeAreaView>
    </NavigationContainer>
  );
};
export default App;
