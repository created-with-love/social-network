import React, { useState } from 'react';
import classNames from 'classnames';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPost } from '../../../redux/state';

function MyPosts({ postsData }) {
  const [postText, setPostText] = useState('');

  const handleTextArea = e => {
    setPostText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    addPost(postText);
    setPostText('');
  };

  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            value={postText}
            className={classNames([s.formTextarea], 'form-control')}
            aria-label="With textarea"
            onChange={handleTextArea}
          ></textarea>
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Add post
          </button>
        </div>
      </form>
      <div className={s.posts}>
        {postsData &&
          postsData.map(({ id, message, likesCount }) => (
            <Post
              message={message}
              likes={likesCount}
              id={id}
              key={`id-${id}`}
            />
          ))}
      </div>
    </div>
  );
}

export default MyPosts;
