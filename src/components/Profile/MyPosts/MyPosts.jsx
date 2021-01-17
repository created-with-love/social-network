import React, { useState } from 'react';
import classNames from 'classnames';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import store from '../../../redux/store';
import { addPost } from '../../../redux/actions/actions';

const notify = () =>
  toast('Can`t submit empty post!', {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

function MyPosts({ postsData }) {
  const [postText, setPostText] = useState('');

  const handleTextArea = e => {
    setPostText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!postText) {
      notify();
    } else {
      store.dispatch(addPost(postText));
      setPostText('');
    }
  };

  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <ToastContainer />
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
            Submit post
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
