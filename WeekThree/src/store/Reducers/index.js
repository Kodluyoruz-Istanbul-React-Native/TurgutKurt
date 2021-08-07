import {combineReducers} from 'redux';
import SignUp from './Auth/SignUp';
import SignIn from './Auth/SignIn';
export default combineReducers({
  SignUpReducer: SignUp,
  SignInReducer: SignIn,
});
