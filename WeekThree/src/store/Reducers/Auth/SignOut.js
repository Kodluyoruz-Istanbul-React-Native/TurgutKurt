import {initialState} from '~/store/initialState';
import {signOut} from '~/store/Types';
export default function SignOut(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case signOut.SIGN_OUT_PENDING:
      return {...state, loading: true, data: null, error: null};
    case signOut.SIGN_OUT_FULFILLED:
      return {...state, loading: false, data: payload, error: null};
    case signOut.SIGN_OUT_REJECTED:
      return {
        ...state,
        loading: false,
        data: null,
        error: payload,
      };
    default:
      return state;
  }
}
