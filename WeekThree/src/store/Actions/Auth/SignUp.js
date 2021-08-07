import auth from '@react-native-firebase/auth';
import {fetchingRequest, fetchingSuccess, fetchingFailure} from '../index';
import {signUp} from '~/store/Types';
import {refs, SET} from '~/request';
export const SignUp = values => {
  return async dispatch => {
    dispatch(fetchingRequest(signUp.SIGN_UP_PENDING));
    try {
      const response = await auth().createUserWithEmailAndPassword(
        values.email,
        values.password,
      );
      const uid = response.user.uid;
      SET(refs.userinfo(uid), {
        name: values.name,
        surname: values.surname,
        email: values.email,
      });
      await dispatch(fetchingSuccess(signUp.SIGN_UP_FULFILLED, response));
    } catch (error) {
      switch (error.code) {
        case 'auth/network-request-failed':
          return dispatch(
            fetchingFailure(
              signUp.SIGN_UP_REJECTED,
              'Network connection error (such as timeout, interrupted connection, or host unreachable)',
            ),
          );
        case 'auth/email-already-in-use':
          return dispatch(
            fetchingFailure(
              signUp.SIGN_UP_REJECTED,
              'That email address is already in use!',
            ),
          );
        case 'auth/invalid-email':
          return dispatch(
            fetchingFailure(
              signUp.SIGN_UP_REJECTED,
              'That email address is invalid!',
            ),
          );
        default:
          return dispatch(
            fetchingFailure(signUp.SIGN_UP_REJECTED, 'Bir şeyler ters gitti'),
          );
      }
    }
  };
};
