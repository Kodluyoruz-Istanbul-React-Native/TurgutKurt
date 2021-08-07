import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from '~/navigation/MainStack';
import {SafeAreaView} from 'react-native';
import store from './store';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';
import {LoginScreen} from './screens';
const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaView style={{flex: 1}}>
            <LoginScreen />
          </SafeAreaView>
          <Toast ref={ref => Toast.setRef(ref)} />
        </NavigationContainer>
      </Provider>
    </>
  );
};
export default App;
