import AsyncStorage from '@react-native-community/async-storage';
import store from '../store/index';
import NavigationService from './navigation';
const saveUserId = async (key, value) => {
  try {
    await AsyncStorage.setItem(
      key,
      key === 'userId' ? JSON.stringify(value) : value,
    );
    await setupAuth();
  } catch (e) {
    console.log(e);
  }
};

const removeUserId = async () => {
  try {
    await AsyncStorage.removeItem('userId');
    store.getState().SignInReducer.userId = null;
    await setupAuth();
  } catch (e) {
    console.log(e);
  }
};

const setupAuth = async () => {
  try {
    const userId = await AsyncStorage.getItem('userId');
    console.log(userId);
    /*if (!userId) {
      NavigationService.navigate('LoginScreen');
      return false;
    }
    if (id) {
      store.getState().SignInReducer.userId = JSON.parse(userId);
      NavigationService.push('MainScreen');
    } else {
      store.getState().SignInReducer.userId = JSON.parse(userId);
      NavigationService.push('Main');
    }*/
  } catch (e) {
    console.log(e);
  }
};

export default {
  saveUserId,
  removeUserId,
  setupAuth,
};
