import React from 'react';
import './Post.scss';
import { FaRegThumbsUp } from 'react-icons/fa';

function Post({ message, likes }) {
  return (
    <div className="item">
      <img
        src="https://dec.camp/wp-content/uploads/2019/05/rebyonok-lider-horosho-ili-ploho_02-1.jpg"
        alt="post"
      ></img>
      <div>
        <FaRegThumbsUp className="item__like-btn">Like </FaRegThumbsUp>
        <span> {likes} likes</span>
      </div>
      {message}
    </div>
  );
}

export default Post;
