import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { addPost } from '../../../redux/actions/actions';
import MyPosts from './MyPosts';
import { getPosts } from '../../../redux/selectors';

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

function MyPostsContainer() {
  const dispatch = useDispatch();
  const posts = useSelector(getPosts);
  const [postText, setPostText] = useState('');
  const handleTextArea = e => {
    setPostText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!postText) {
      notify();
    } else {
      dispatch(addPost(postText));
      setPostText('');
    }
  };

  return (
    <MyPosts
      onSubmit={handleSubmit}
      onChange={handleTextArea}
      postText={postText}
      state={posts}
    />
  );
}

export default MyPostsContainer;
