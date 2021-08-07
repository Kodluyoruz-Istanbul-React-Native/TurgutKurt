import auth from '@react-native-firebase/auth';
import {fetchingRequest, fetchingSuccess, fetchingFailure} from '../index';
import {signOut} from '~/store/Types';
export const SignOut = () => {
  return async dispatch => {
    dispatch(fetchingRequest(signOut.SIGN_OUT_PENDING));
    try {
      await auth().signOut();
      await dispatch(fetchingSuccess(signOut.SIGN_OUT_FULFILLED, response));
    } catch (error) {
      dispatch(fetchingFailure(signOut.SIGN_OUT_REJECTED, error));
    }
  };
};
