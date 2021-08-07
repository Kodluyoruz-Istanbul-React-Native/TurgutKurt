export const fetchingRequest = type => ({type});
export const fetchingSuccess = (type, json, next) => ({
  type,
  payload: json,
  next,
});
export const fetchingFailure = (type, error) => ({type, payload: error});
export default {
  fetchingRequest,
  fetchingSuccess,
  fetchingFailure,
};
import {SignUp} from './Auth/SignUp';
export {SignUp};
