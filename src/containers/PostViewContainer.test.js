import { mapStateToProps } from './PostViewContainer';

it('displays the correct post', () => {
  const posts = [
    { id: 0 },
    { id: 1 }
  ];

  const initialState = { clone: { posts } };

  expect(mapStateToProps(initialState, { postId: 1 }).post.id).toEqual(1);
});