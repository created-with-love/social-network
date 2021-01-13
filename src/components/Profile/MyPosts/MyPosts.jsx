import React from 'react';
import './MyPosts.scss';
import Post from './Post/Post';

function MyPosts() {
  return (
    <div>
      My posts
      <div>New post</div>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className="posts">
        <Post message="Hi, lads. How to became successful here?" likes="5" />
        <Post message="It`s my first post!" likes="11" />
      </div>
    </div>
  );
}

export default MyPosts;
