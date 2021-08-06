import React, {Component} from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import {LoginValidationSchema} from '~/schema';
import styles from './styles';
import {colors} from '~/components/config';
import {connect} from 'react-redux';
import {SignUp} from '~/store/Actions/Auth/SignUp';

/*const LoginScreen = props => {
  console.log(props);
  return (
    
  );
};
//const mapStateToProps = state => ({ SignUpReducer: state.SignUpReducer });
/*const mapStateToProps = state => {
  return {
    loading: state.SignUpReducer.loading,
    data: state.SignUpReducer.data,
    error: state.SignUpReducer.error,
  };
};
const mapDispatchToProps = {
  SignUp,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);


/*const mapDispatchToProps = dispatch => ({
  SignUp: (email, password) => dispatch(SignUp(email, password)),
});*/

class LoginScreen extends Component {
  render() {
    return (
      <Formik
        validationSchema={LoginValidationSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={async values => {
          debugger;
          await this.props.SignUp(values.email, values.password);
          //await props.SignUp(values.email, values.password);
          debugger;
          const {loading, data, error} = this.props.SignUpReducer;
          console.log(loading);
          console.log(data);
          console.log(error);
          debugger;
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
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
  }
}
const mapStateToProps = state => {
  return {
    SignUpReducer: state.SignUpReducer,
  };
};
const mapDispatchToProps = {
  SignUp,
};
LoginScreen = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
export default LoginScreen;
