import React from 'react';

const Captcha = ({ url, setCaptchaValue, value }) => {
  return (
    <>
      {url && <img src={url} alt="captchaImage" width="150" />}
      {url && <input name="captcha" onChange={setCaptchaValue} value={value} />}
    </>
  );
};

export default Captcha;
