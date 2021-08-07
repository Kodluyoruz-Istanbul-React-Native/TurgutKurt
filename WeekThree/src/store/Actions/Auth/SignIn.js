import auth from '@react-native-firebase/auth';
import {fetchingRequest, fetchingSuccess, fetchingFailure} from '../index';
import {signIn} from '~/store/Types';
import {refs, SET} from '~/request';
export const SignIn = values => {
  return async dispatch => {
    dispatch(fetchingRequest(signIn.SIGN_UP_PENDING));
    try {
      const response = await auth().signInWithEmailAndPassword(
        values.email,
        values.password,
      );
      console.log('SignIn response');
      console.log(response);

      await dispatch(fetchingSuccess(signIn.SIGN_UP_FULFILLED, response));
    } catch (error) {
      console.log('catch girdim');
      switch (error.code) {
        case 'auth/network-request-failed':
          return dispatch(
            fetchingFailure(
              signIn.SIGN_UP_REJECTED,
              'Ağ bağlantı hatası (zaman aşımı, kesintiye uğramış bağlantı veya erişilemeyen ana bilgisayar gibi)',
            ),
          );
        case 'auth/email-already-in-use':
          return dispatch(
            fetchingFailure(
              signIn.SIGN_UP_REJECTED,
              'Bu e-mail adresi kullanımda!',
            ),
          );
        case 'auth/invalid-email':
          return dispatch(
            fetchingFailure(signIn.SIGN_UP_REJECTED, 'Geçersiz e-mail adresi!'),
          );
        default:
          return dispatch(
            fetchingFailure(signIn.SIGN_UP_REJECTED, 'Bir şeyler ters gitti'),
          );
      }
    }
  };
};
