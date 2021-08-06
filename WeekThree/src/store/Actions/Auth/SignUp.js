import auth from '@react-native-firebase/auth';
import {SIGN_UP_PENDING, SIGN_UP_FULFILLED, SIGN_UP_REJECTED} from './types';
export const SignUp = (email, password) => {
  return async dispatch => {
    dispatch({type: SIGN_UP_PENDING});
    try {
      const response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      //const payload = response.data;
      const payload = {...response};
      console.log('payload');
      console.log(payload);
      dispatch({type: SIGN_UP_FULFILLED, payload: response});
    } catch (error) {
      console.log('catch girdim');
      switch (error.code) {
        case 'auth/network-request-failed':
          return dispatch({
            type: SIGN_UP_REJECTED,
            payload:
              'Ağ bağlantı hatası (zaman aşımı, kesintiye uğramış bağlantı veya erişilemeyen ana bilgisayar gibi)',
          });
        case 'auth/email-already-in-use':
          return dispatch({
            type: SIGN_UP_REJECTED,
            payload: 'Bu e-mail adresi kullanımda!',
          });
        case 'auth/invalid-email':
          return dispatch({
            type: SIGN_UP_REJECTED,
            payload: 'Geçersiz e-mail adresi!',
          });
        default:
          return dispatch({
            type: SIGN_UP_REJECTED,
            payload: 'Bir şeyler ters gitti',
          });
      }
    }
  };
};
