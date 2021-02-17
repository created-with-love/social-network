import React from 'react';
import s from './SignUp.module.css';

export default function ErrorMessage({ error }) {
  if (error) {
    switch (error.type) {
      case 'required':
        return <p className={s.errorMessage}>This is required</p>;
      case 'minLength':
        return <p className={s.errorMessage}>Inputted value is too short</p>;
      case 'maxLength':
        return (
          <p className={s.errorMessage}>
            Your name should contain max 18 characters
          </p>
        );
      case 'pattern':
        return <p className={s.errorMessage}>Enter a valid data</p>;
      case 'min':
        return <p className={s.errorMessage}>Minimum age is 18</p>;
      case 'validate':
        return <p className={s.errorMessage}>Username is already used</p>;
      default:
        return null;
    }
  }

  return null;
}
