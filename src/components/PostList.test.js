import React from 'react';
import { shallow } from 'enzyme';
import PostList from './PostList';

it('renders without crashing', () => {
  shallow(<PostList/>);
});

it('renders a list of posts', () => {
  const posts = [{},{},{}];

  const wrapper = shallow(
    <MemoryRouter>
      <PostList posts={posts}/>
    </MemoryRouter>
  );

  expect(wrapper.children()).toHaveLength(posts.length);
});
