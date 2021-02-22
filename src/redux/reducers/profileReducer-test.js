import profileReducer from './profileReducer';
import { addPost } from 'redux/actions/actions';

const initState = {
  posts: [
    {
      id: 1,
      message: 'Hi, lads. How to became successful here?',
      likesCount: 2,
      isLiked: false,
    },
    {
      id: 2,
      message: 'It`s my first post!',
      likesCount: 12,
      isLiked: false,
    },
  ],
};

it('length of posts array should be incremented', () => {
  const action = addPost('test!');
  const newState = profileReducer(initState, action);

  expect(newState.posts.length).toBe(5);
});

export {};
