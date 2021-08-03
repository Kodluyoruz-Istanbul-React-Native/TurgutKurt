import * as yup from 'yup';
const LoginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Lütfen geçeri e-mail girin.')
    .max(40, ({max}) => `En fazla ${max} karakter olmalıdır.`)
    .required('E-mail gerekli'),
  password: yup
    .string()
    .min(6, ({min}) => `En az ${min} karakter olmalıdır.`)
    .max(12, ({max}) => `En fazla ${max} karakter olmalıdır.`)
    .required('Şifre zorunlu'),
});

export {LoginValidationSchema};
