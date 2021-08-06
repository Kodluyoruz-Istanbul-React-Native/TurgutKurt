import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from '~/navigation/MainStack';
import {SafeAreaView} from 'react-native';
import store from './store';
import {Provider} from 'react-redux';
import {LoginScreen, FeedScreen} from './screens';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <LoginScreen />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
