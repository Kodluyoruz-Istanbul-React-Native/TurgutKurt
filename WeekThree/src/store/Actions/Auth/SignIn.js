import auth from '@react-native-firebase/auth';
import {fetchingRequest, fetchingSuccess, fetchingFailure} from '../index';
import {signIn} from '~/store/Types';
export const SignIn = values => {
  return async dispatch => {
    dispatch(fetchingRequest(signIn.SIGN_IN_PENDING));
    try {
      const response = await auth().signInWithEmailAndPassword(
        values.email,
        values.password,
      );
      const uid = response.user.uid;
      await dispatch(fetchingSuccess(signIn.SIGN_IN_FULFILLED, uid));
    } catch (error) {
      switch (error.code) {
        case 'auth/network-request-failed':
          return dispatch(
            fetchingFailure(
              signIn.SIGN_IN_REJECTED,
              'Network connection error (such as timeout, interrupted connection, or host unreachable)',
            ),
          );
        case 'auth/email-already-in-use':
          return dispatch(
            fetchingFailure(
              signIn.SIGN_IN_REJECTED,
              'That email address is already in use!',
            ),
          );
        case 'auth/invalid-email':
          return dispatch(
            fetchingFailure(
              signIn.SIGN_IN_REJECTED,
              'That email address is invalid!',
            ),
          );
        default:
          return dispatch(
            fetchingFailure(signIn.SIGN_IN_REJECTED, 'Bir şeyler ters gitti'),
          );
      }
    }
  };
};
