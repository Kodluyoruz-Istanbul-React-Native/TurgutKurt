import React, {useRef} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Formik} from 'formik';
import {RegisterValidationSchema} from '~/schema';
import Toast from 'react-native-toast-message';
import styles from './styles';
import {colors} from '~/components/config';
import {useSelector, useDispatch, useStore} from 'react-redux';
import {SignUp} from '~/store/Actions';
//component
const RegisterScreen = props => {
  //selected field from global state
  const loading = useSelector(state => state.SignUpReducer.loading);
  const error = useSelector(state => state.SignUpReducer.error);
  //dispatch
  const dispatch = useDispatch();
  //global store
  const store = useStore();
  //toast ref
  const modalToastRef = useRef();
  //toast func
  const globalToast = err => {
    console.log('globalToast girdi');
    console.log(err);
    debugger;
    modalToastRef.current.show({
      type: err ? 'error' : 'success',
      position: err ? 'bottom' : 'top',
      text1: err ? 'Hata' : 'Başarılı',
      text2: err ? err : 'Kayıt işlemi başarıyla gerçekleştirildi.',
      visibilityTime: 2500,
      autoHide: true,
      bottomOffset: 40,
    });
  };
  //submit func
  const _handleSubmit = async values => {
    await dispatch(SignUp(values));
    const e = store.getState().SignUpReducer.error;
    globalToast(e);
  };
  return (
    <Formik
      validationSchema={RegisterValidationSchema}
      initialValues={{name: '', surname: '', email: '', password: ''}}
      onSubmit={values => _handleSubmit(values)}>
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
          {loading ? (
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
          <Toast ref={modalToastRef} />
        </View>
      )}
    </Formik>
  );
};
export default RegisterScreen;
