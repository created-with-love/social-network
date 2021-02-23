import ErrorMessage from 'components/SignUp/ErrorMessage';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import s from 'components/SignUp/SignUp.module.css';
import { loginThunk } from 'redux/reducers/authReducer';
import { getAuthObject, getCaptchaSelector } from 'redux/selectors';
import Captcha from 'components/Captcha/Captcha';

const Login = () => {
  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting },
  } = useForm();

  const captchaUrl = useSelector(getCaptchaSelector);

  const [captcha, setCaptcha] = React.useState('');
  const setCaptchaValue = e => setCaptcha(e.target.value);

  const dispatch = useDispatch();

  const { isAuth } = useSelector(getAuthObject);

  const onSubmit = (data, e) => {
    const { email, password, rememberMe } = data;
    console.log(email, password, rememberMe, captcha);
    dispatch(loginThunk(email, password, rememberMe, captcha));
    e.target.reset();
  };

  if (isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={s.heading}>Login</h1>

        <label className={s.label}>Email:</label>
        <input
          className={s.input}
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
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
          })}
        />
        <ErrorMessage error={errors.password} />

        <div className={s.submitBox}>
          <button className={s.button} type="submit" disabled={isSubmitting}>
            Login
          </button>
        </div>
        <label className={s.labelSubmit}>
          <input
            type="checkbox"
            name="rememberMe"
            className={s.checkbox}
            ref={register({ required: false })}
          />
          Remember me
        </label>
      </form>
      <Captcha
        url={captchaUrl}
        setCaptchaValue={setCaptchaValue}
        value={captcha}
      />
    </div>
  );
};

export default Login;
