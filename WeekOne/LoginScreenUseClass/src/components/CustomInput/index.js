import React from 'react';
import {Text, TextInput} from 'react-native';
import styles from './styles';
const CustomInput = props => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    inputExtraStyle,
    phone,
    ...inputProps
  } = props;
  const hasError = errors[name] && touched[name];
  return (
    <>
      <TextInput
        style={[
          styles.inputStyle,
          inputExtraStyle,
          hasError && styles.errorInput,
        ]}
        value={value}
        onChangeText={text =>
          onChange(name)(props.phone ? text.replace(/[^0-9]/g, '') : text)
        }
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
      />
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </>
  );
};
export {CustomInput};
