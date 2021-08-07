import {combineReducers} from 'redux';
import SignUp from './Auth/SignUp';
import SignIn from './Auth/SignIn';
import SignOut from './Auth/SignOut';
export default combineReducers({
  SignUpReducer: SignUp,
  SignInReducer: SignIn,
  SignOutReducer: SignOut,
});
