import React from 'react';
import classNames from 'classnames';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import { getProfilePhotos } from 'redux/selectors';

function MyPosts({ state, onSubmit, onChange, postText, handleLike }) {
  const photos = useSelector(getProfilePhotos);

  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <ToastContainer />
      <form onSubmit={onSubmit}>
        <div>
          <textarea
            value={postText}
            className={classNames([s.formTextarea], 'form-control')}
            aria-label="With textarea"
            onChange={onChange}
          ></textarea>
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Submit post
          </button>
        </div>
      </form>
      <div className={s.posts}>
        {state &&
          state.map(({ id, message, likesCount, isLiked }) => (
            <Post
              message={message}
              likes={likesCount}
              id={id}
              key={`id-${id}`}
              handleLike={handleLike}
              isLiked={isLiked}
              photos={photos}
            />
          ))}
      </div>
    </div>
  );
}

export default MyPosts;
