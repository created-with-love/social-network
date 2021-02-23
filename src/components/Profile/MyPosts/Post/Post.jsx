import React from 'react';
import s from './Post.module.css';
import { FaRegThumbsUp } from 'react-icons/fa';
import classNames from 'classnames';

function Post({ id, message, likes, handleLike, isLiked, photos }) {
  return (
    <div className={s.item} id={id}>
      <div className={s.postBody}>
        <img
          src={
            photos?.small
              ? photos.small
              : 'https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png'
          }
          alt="post"
        />
        <div className={s.messageText}>{message}</div>
      </div>

      <div className={s.likesBox}>
        <FaRegThumbsUp
          className={classNames([s.item__likeBtn], {
            [s.active]: isLiked,
          })}
          onClick={() => handleLike(id)}
        >
          Like
        </FaRegThumbsUp>
        <span> {likes} likes</span>
      </div>
    </div>
  );
}

export default Post;
