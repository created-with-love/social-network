import React from 'react';
import s from './Post.module.css';
import { FaRegThumbsUp } from 'react-icons/fa';

function Post({ id, message, likes }) {
  return (
    <div className={s.item} id={id}>
      <div className={s.postBody}>
        <img
          src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png"
          alt="post"
        />
        <div className={s.messageText}>{message}</div>
      </div>

      <div>
        <FaRegThumbsUp className={s.item__likeBtn}>Like </FaRegThumbsUp>
        <span> {likes} likes</span>
      </div>
    </div>
  );
}

export default Post;
