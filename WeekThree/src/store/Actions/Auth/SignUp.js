import auth from '@react-native-firebase/auth';
import {fetchingRequest, fetchingSuccess, fetchingFailure} from '../index';
import {signUp} from '~/store/Types';
export const SignUp = (email, password) => {
  return async dispatch => {
    dispatch(fetchingRequest(signUp.SIGN_UP_PENDING));
    try {
      const response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      debugger;
      await dispatch(fetchingSuccess(signUp.SIGN_UP_FULFILLED, response));
    } catch (error) {
      console.log('catch girdim');
      switch (error.code) {
        case 'auth/network-request-failed':
          return dispatch(
            fetchingFailure(
              signUp.SIGN_UP_REJECTED,
              'Ağ bağlantı hatası (zaman aşımı, kesintiye uğramış bağlantı veya erişilemeyen ana bilgisayar gibi)',
            ),
          );
        case 'auth/email-already-in-use':
          return dispatch(
            fetchingFailure(
              signUp.SIGN_UP_REJECTED,
              'Bu e-mail adresi kullanımda!',
            ),
          );
        case 'auth/invalid-email':
          return dispatch(
            fetchingFailure(signUp.SIGN_UP_REJECTED, 'Geçersiz e-mail adresi!'),
          );
        default:
          return dispatch(
            fetchingFailure(signUp.SIGN_UP_REJECTED, 'Bir şeyler ters gitti'),
          );
      }
    }
  };
};
