import React, {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Formik} from 'formik';
import {LoginValidationSchema} from '~/schema';
import styles from './styles';
import {colors} from '~/components/config';
import {useSelector, useDispatch, useStore} from 'react-redux';
import {SignIn} from '~/store/Actions';
import {mainStack} from '~/config/navigators';
import {AuthControl} from '~utils';
import {getToast} from '~helpers';
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
  //submit func
  const _handleSubmit = async (values, {resetForm}) => {
    setIsloading(true);
    //dispatch
    await dispatch(SignIn(values));
    //store get data
    const {data, error} = store.getState().SignInReducer;
    if (data !== null) {
      //save storage userId
      await AuthControl.saveUserId('userId', data);
      //get toast
      getToast(error);
      //all input value reset
      resetForm();
    } else {
      getToast(error);
    }
    setIsloading(false);
  };
  return (
    <Formik
      validationSchema={LoginValidationSchema}
      initialValues={{email: '', password: ''}}
      onSubmit={(values, {resetForm}) => _handleSubmit(values, {resetForm})}>
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
        </View>
      )}
    </Formik>
  );
};
export default LoginScreen;
