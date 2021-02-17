import * as yup from 'yup';

export const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Full Name is required'),

  lastName: yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Full Name is required'),

  username: yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Full Name is required'),

  email: yup.string().email().required('Email is required'),

  password: yup
    .string()
    .required('Password is required')
    .min(
      6,
      'Please input your password! The password must be at least 8 characters!',
    ),
});

export const validateIsFieldEmpty = value => {
  if (value === '') return false;
  return true;
};
