import React from 'react';
import s from './Footer.module.css';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <span>by Vladymyr Ivanchenko</span>

        <a
          href="https://www.linkedin.com/in/vladimir-ivanchenko/"
          alt="linkedinLink"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className={s.socLink} />
        </a>

        <a
          href="https://github.com/created-with-love"
          alt="githubLink"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className={s.socLink} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
