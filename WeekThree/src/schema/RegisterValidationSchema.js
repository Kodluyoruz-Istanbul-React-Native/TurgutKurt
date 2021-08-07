import * as yup from 'yup';
const RegisterValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('İsim zorunlu'),
  surname: yup
    .string()
    .min(3, ({min}) => `En az ${min} karakter olmalıdır.`)
    .required('Soyisim zorunlu'),
  email: yup
    .string()
    .email('Lütfen geçeri e-mail girin.')
    .max(40, ({max}) => `En fazla ${max} karakter olmalıdır.`)
    .required('E-mail gerekli'),
  password: yup
    .string()
    .min(6, ({min}) => `En az ${min} karakter olmalıdır.`)
    .max(25, ({max}) => `En fazla ${max} karakter olmalıdır.`)
    .required('Şifre zorunlu'),
});

export {RegisterValidationSchema};
