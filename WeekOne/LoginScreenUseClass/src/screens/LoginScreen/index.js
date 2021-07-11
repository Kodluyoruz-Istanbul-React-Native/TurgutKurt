import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {Formik, Field} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {colors, CustomInput, SafeStatusView} from '~components';
import {LoginValidationSchema} from '~schema';
class LoginScreen extends Component {
  _handleSubmit = async values => {
    console.log(values);
  };
  render() {
    return (
      <SafeStatusView
        statusBackColor={colors.MainWhite}
        statusBarStyle={'dark-content'}
        safeStyle={{backgroundColor: colors.MainWhite}}
        content={
          <KeyboardAwareScrollView style={[styles.container]}>
            <View style={styles.TopViewStyle}>
              <Image
                source={require('../../assets/images/loginlogo.png')}
                style={styles.imageStyle}
              />
            </View>
            <Text style={styles.welcomeText}>Hoşgeldiniz</Text>
            <Formik
              validateOnMount={true}
              validationSchema={LoginValidationSchema}
              initialValues={{
                userName: '',
                password: '',
              }}
              onSubmit={this._handleSubmit}>
              {({handleSubmit, isValid}) => (
                <>
                  <View style={styles.inputViewStyle}>
                    <Field
                      component={CustomInput}
                      name="userName"
                      placeholder="Kullanıcı Adı"
                      placeholderTextColor="#8E9092"
                    />
                  </View>
                  <View style={styles.inputViewStyle}>
                    <Field
                      component={CustomInput}
                      name="password"
                      placeholder="Şifre"
                      placeholderTextColor="#8E9092"
                      maxLength={12}
                      secureTextEntry={true}
                    />
                  </View>
                  <View style={styles.inputViewStyle}>
                    <TouchableOpacity
                      style={
                        !isValid
                          ? styles.DisableButton
                          : [
                              styles.DisableButton,
                              {backgroundColor: colors.MainPink},
                            ]
                      }
                      disabled={!isValid}
                      onPress={handleSubmit}>
                      <Text style={styles.ButtonText}>GİRİŞ YAP</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>
            <View style={styles.freeStyle2}>
              <View style={styles.lineStyle} />
            </View>
          </KeyboardAwareScrollView>
        }
      />
    );
  }
}
export {LoginScreen};
