import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { addPost } from '../../../redux/actions/actions';
import MyPosts from './MyPosts';
import { getPosts } from '../../../redux/selectors';
import StoreContext from '../../../StoreContext';

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
  const store = React.useContext(StoreContext);
  const posts = getPosts(store.getState());
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
    <MyPosts
      onSubmit={handleSubmit}
      onChange={handleTextArea}
      postText={postText}
      state={posts}
    />
  );
}

export default MyPostsContainer;
