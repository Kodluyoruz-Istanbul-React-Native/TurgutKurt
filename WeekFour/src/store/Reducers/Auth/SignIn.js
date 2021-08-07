import {initialState} from '~/store/initialState';
import {signIn} from '~/store/Types';
export default function SignIn(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case signIn.SIGN_IN_PENDING:
      return {...state, loading: true, data: null, error: null};
    case signIn.SIGN_IN_FULFILLED:
      return {...state, loading: false, data: payload, error: null};
    case signIn.SIGN_IN_REJECTED:
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
