import React, {useRef, useState} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Formik} from 'formik';
import {LoginValidationSchema} from '~/schema';
import Toast from 'react-native-toast-message';
import styles from './styles';
import {colors} from '~/components/config';
import {useSelector, useDispatch, useStore} from 'react-redux';
import {SignIn} from '~/store/Actions';
import {mainStack} from '~/config/navigators';
import NavigationService from '~/utils/navigation';
//component
const LoginScreen = props => {
  //selected field from global state
  const loading = useSelector(state => state.SignInReducer.loading);
  const error = useSelector(state => state.SignInReducer.error);
  //local state
  const [isloading, setIsloading] = useState(false);
  //dispatch
  const dispatch = useDispatch();
  //global store
  const store = useStore();
  //toast ref
  const modalToastRef = useRef();
  //toast func
  const globalToast = err => {
    modalToastRef.current.show({
      type: err ? 'error' : 'success',
      position: err ? 'bottom' : 'top',
      text1: err ? 'Error!' : 'Successful',
      text2: err ? err : 'Login done successfully.',
      visibilityTime: 2500,
      autoHide: true,
      bottomOffset: 40,
    });
  };
  //submit func
  const _handleSubmit = async values => {
    setIsloading(true);
    await dispatch(SignIn(values));
    const e = store.getState().SignInReducer.error;
    globalToast(e);
    //navigation
    setTimeout(() => {
      setIsloading(false);
      NavigationService.navigate(mainStack.home_tab);
    }, 2000);
  };
  return (
    <Formik
      validationSchema={LoginValidationSchema}
      initialValues={{email: '', password: ''}}
      onSubmit={values => _handleSubmit(values)}>
      {({handleChange, handleBlur, handleSubmit, values, errors, isValid}) => (
        <View style={styles.Container}>
          <TextInput
            name="email"
            placeholder="Enter your email"
            style={[
              styles.textInput,
              values.email === ''
                ? styles.textInput
                : errors.email
                ? styles.textInputExStyle1
                : styles.textInputExStyle2,
            ]}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            keyboardType="email-address"
          />
          {errors.email && (
            <Text style={styles.ErrorTextStyle}>{errors.email}</Text>
          )}
          <TextInput
            name="password"
            placeholder="Enter your password"
            style={[
              styles.textInput,
              values.password === ''
                ? styles.textInput
                : errors.password
                ? styles.textInputExStyle1
                : styles.textInputExStyle2,
            ]}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
          />
          {errors.password && (
            <Text style={styles.ErrorTextStyle}>{errors.password}</Text>
          )}
          {isloading ? (
            <ActivityIndicator size="large" color={colors.MainPink} />
          ) : (
            <TouchableOpacity
              style={[
                styles.ButtonStyle,
                isValid
                  ? {backgroundColor: colors.MainPink}
                  : {backgroundColor: 'gray'},
              ]}
              onPress={handleSubmit}
              disabled={!isValid}>
              <Text style={styles.ButtonTextStyle}>Login</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={styles.RegisterButton}
            onPress={() => props.navigation.navigate(mainStack.register)}>
            <Text style={styles.RegisterText}>Register</Text>
          </TouchableOpacity>
          <Toast ref={modalToastRef} />
        </View>
      )}
    </Formik>
  );
};
export default LoginScreen;
