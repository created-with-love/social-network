import React from 'react';
import { useForm } from 'react-hook-form';

import ErrorMessage from './ErrorMessage';
import s from './SignUp.module.css';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting },
  } = useForm();

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const onSubmit = async (data, e) => {
    await sleep(1000);
    console.log(data);
    alert(JSON.stringify(data));
    e.target.reset();
  };

  const validateIsFieldEmpty = value => {
    if (value === '') return false;
    return true;
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={s.heading}>Sign Up</h1>
      <label className={s.label}>First Name:</label>
      <input
        className={s.input}
        name="firstName"
        ref={register({
          required: true,
          minLength: 2,
          maxLength: 16,
          pattern: /^[A-Za-z]+$/i,
          validate: validateIsFieldEmpty,
        })}
      />
      <ErrorMessage error={errors.firstName} />

      <label className={s.label}>Last Name:</label>
      <input
        className={s.input}
        name="lastName"
        ref={register({
          required: true,
          minLength: 4,
          maxLength: 16,
          pattern: /^[A-Za-z]+$/i,
          validate: validateIsFieldEmpty,
        })}
      />
      <ErrorMessage error={errors.lastName} />

      <label className={s.label}>Gender:</label>
      <select name="gender" ref={register({ required: true })}>
        <option value="">Select...</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="custom">Custom</option>
      </select>

      <ErrorMessage error={errors.gender} />

      <label className={s.label}>Username:</label>
      <input
        className={s.input}
        name="username"
        onBlur={e => validateIsFieldEmpty(e.target.value)}
        ref={register({ required: true, validate: validateIsFieldEmpty })}
      />
      <ErrorMessage error={errors.username} />

      <label className={s.label}>Email:</label>
      <input
        className={s.input}
        name="email"
        ref={register({
          required: true,
          pattern: /^\S+@\S+$/i,
          validate: validateIsFieldEmpty,
        })}
      />
      <ErrorMessage error={errors.email} />

      <label className={s.label}>Password:</label>
      <input
        className={s.input}
        type="password"
        name="password"
        ref={register({
          required: true,
          minLength: 7,
          maxLength: 16,
          pattern: /^[A-Za-z0-9]+$/i,
          validate: validateIsFieldEmpty,
        })}
      />
      <ErrorMessage error={errors.password} />

      <label className={s.label}>About you:</label>
      <textarea
        name="aboutYou"
        ref={register({ required: false })}
        className={s.textarea}
      />

      <div className={s.submitBox}>
        <button className={s.button} type="submit" disabled={isSubmitting}>
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignUp;
