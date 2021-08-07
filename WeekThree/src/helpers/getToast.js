import Toast from 'react-native-toast-message';
const getToast = err => {
  Toast.show({
    type: err ? 'error' : 'success',
    position: err ? 'bottom' : 'top',
    text1: err ? 'Error!' : 'Successful',
    text2: err ? err : 'Login done successfully.',
    visibilityTime: 2500,
    autoHide: true,
    bottomOffset: 40,
  });
};
export {getToast};
