import React from 'react';
import s from './Post.module.css';
import { FaRegThumbsUp } from 'react-icons/fa';

function Post({ id, message, likes }) {
  return (
    <div className={s.item} id={id}>
      <img
        src="https://dec.camp/wp-content/uploads/2019/05/rebyonok-lider-horosho-ili-ploho_02-1.jpg"
        alt="post"
      ></img>
      <div>
        <FaRegThumbsUp className={s.item__likeBtn}>Like </FaRegThumbsUp>
        <span> {likes} likes</span>
      </div>
      {message}
    </div>
  );
}

export default Post;
