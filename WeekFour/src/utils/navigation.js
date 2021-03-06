import React from 'react';
import {CommonActions, StackActions} from '@react-navigation/native';
const navigationRef = React.createRef();
//ref my default navigation
function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
//ref my default replace
function replace(name, params) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}
// add other navigation functions that you need and export them

function navigate12(routeName, params) {
  navigationRef.dispatch(
    CommonActions.navigate({
      routeName,
      params,
    }),
  );
}
function push(...args) {
  navigationRef.current?.dispatch(StackActions.push(...args));
}
export default {
  navigate12,
  navigate,
  replace,
  push,
  navigationRef,
};
