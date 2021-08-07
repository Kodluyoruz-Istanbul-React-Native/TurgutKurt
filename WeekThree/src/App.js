import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from '~/navigation/MainStack';
import {SafeAreaView} from 'react-native';
import store from './store';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';
import NavigationService from '~/utils/navigation';
const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer ref={NavigationService.navigationRef}>
          <SafeAreaView style={{flex: 1}}>
            <MainStack />
          </SafeAreaView>
          <Toast ref={ref => Toast.setRef(ref)} />
        </NavigationContainer>
      </Provider>
    </>
  );
};
export default App;
