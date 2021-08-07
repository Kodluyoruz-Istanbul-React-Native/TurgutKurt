import React, {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Formik} from 'formik';
import {RegisterValidationSchema} from '~/schema';
import styles from './styles';
import {colors} from '~/components/config';
import {useSelector, useDispatch, useStore} from 'react-redux';
import {SignUp} from '~/store/Actions';
import {AuthControl} from '~utils';
import {getToast} from '~helpers';
//component
const RegisterScreen = props => {
  //selected field from global state
  const loading = useSelector(state => state.SignUpReducer.loading);
  const error = useSelector(state => state.SignUpReducer.error);
  //dispatch
  const dispatch = useDispatch();
  //local state
  const [isloading, setIsloading] = useState(false);
  //global store
  const store = useStore();
  //submit func
  const _handleSubmit = async (values, {resetForm}) => {
    setIsloading(true);
    //dispatch
    await dispatch(SignUp(values));
    //store get data
    const {data, error} = store.getState().SignUpReducer;
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
      validationSchema={RegisterValidationSchema}
      initialValues={{name: '', surname: '', email: '', password: ''}}
      onSubmit={(values, {resetForm}) => _handleSubmit(values, {resetForm})}>
      {({handleChange, handleBlur, handleSubmit, values, errors, isValid}) => (
        <View style={styles.Container}>
          <TextInput
            name="name"
            placeholder="Enter your name"
            style={[
              styles.textInput,
              values.email === ''
                ? styles.textInput
                : errors.email
                ? styles.textInputExStyle1
                : styles.textInputExStyle2,
            ]}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />
          {errors.name && (
            <Text style={styles.ErrorTextStyle}>{errors.name}</Text>
          )}
          <TextInput
            name="surname"
            placeholder="Enter your surname"
            style={[
              styles.textInput,
              values.email === ''
                ? styles.textInput
                : errors.email
                ? styles.textInputExStyle1
                : styles.textInputExStyle2,
            ]}
            onChangeText={handleChange('surname')}
            onBlur={handleBlur('surname')}
            value={values.surname}
          />
          {errors.surname && (
            <Text style={styles.ErrorTextStyle}>{errors.surname}</Text>
          )}
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
              <Text style={styles.ButtonTextStyle}>Register</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={styles.RegisterButton}
            onPress={() => props.navigation.goBack()}>
            <Text style={styles.RegisterText}>Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};
export default RegisterScreen;
