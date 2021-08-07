import {initialState} from '~/store/initialState';
import {signUp} from '~/store/Types';
export default function SignUp(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case signUp.SIGN_UP_PENDING:
      return {...state, loading: true, data: null, error: null};
    case signUp.SIGN_UP_FULFILLED:
      return {...state, loading: false, data: payload, error: null};
    case signUp.SIGN_UP_REJECTED:
      debugger;
      console.log('SIGN_UP_REJECTED girdim');
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
