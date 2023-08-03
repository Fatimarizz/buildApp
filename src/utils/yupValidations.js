import * as yup from 'yup';

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const registerSchema = yup.object({
  fullName: yup.string().required('Full name is required'),
  email: yup
    .string()
    .required('Valid email is required.')
    .email('Please enter a valid email address.'),
  phoneNumber: yup
    .string()
    .required('Phone number is required.')
    .matches(
      phoneRegExp,
      'Please enter a valid phone number using numbers and dashes.'
    ),
  acceptTOS: yup
    .bool()
    .isTrue('You must read and agree to the Terms of Service.'),
  password: yup.string().min(8, 'Password must be at least 8 characters long'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  facebook: yup.string(),
  twitter: yup.string(),
  discord: yup.string(),
  instagram: yup.string()
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .required('Valid email is required.')
    .email('Please enter a valid email address.'),
  password: yup.string().required('Password is required.')
});

export const contactSchema = yup.object({
  email: yup
    .string()
    .required('Valid email is required.')
    .email('invalid email.'),
  fullName: yup.string().required('Full name is required'),
  message: yup.string().required('Please Enter Some Text Message')
});
