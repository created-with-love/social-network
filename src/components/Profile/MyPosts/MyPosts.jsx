import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts({ postsData }) {
  return (
    <div className={s.myPosts}>
      <h3>My posts</h3>
      <div>New post</div>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
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
