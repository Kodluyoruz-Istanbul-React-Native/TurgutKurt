import React from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import {LoginValidationSchema} from '~/schema';
import styles from './styles';
import {colors} from '~/components/config';
const LoginScreen = () => {
  return (
    <Formik
      validationSchema={LoginValidationSchema}
      initialValues={{email: '', password: ''}}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values, errors, isValid}) => (
        <View style={styles.Container}>
          <TextInput
            name="email"
            placeholder="E-mail"
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
            placeholder="Şifre"
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
          <TouchableOpacity
            style={[
              styles.ButtonStyle,
              isValid
                ? {backgroundColor: colors.MainPink}
                : {backgroundColor: 'gray'},
            ]}
            onPress={handleSubmit}
            disabled={!isValid}>
            <Text style={styles.ButtonTextStyle}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};
export default LoginScreen;
