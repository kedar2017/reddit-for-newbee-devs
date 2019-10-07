import React from 'react';
import { shallow } from 'enzyme';

import Post from './Post';
import moment from 'moment';

it('renders without crashing', () => {
  shallow(<Post/>)
});

it('renders information about the post', () => {
  const data = {
    title: 'Test',
    url: 'http://google.com/',
    author: 'testuser1',
    score: 5,
    timestamp: '2018-11-05T05:02:38.544Z',
    comments: []
  };

  const wrapper = shallow(
    <Post
      title={data.title}
      url={data.url}
      author={data.author}
      score={data.score}
      timestamp={data.timestamp}
      comments={data.comments}
    />
  );

  expect(wrapper.find('.Post__Title').text()).toEqual(data.title);
  expect(wrapper.find('.Post__Url').text()).toEqual(data.url);
  expect(wrapper.find('.Post__Author').text()).toEqual(data.author);
  expect(wrapper.find('.Post__Timestamp').text()).toEqual(moment(data.timestamp).fromNow());
  expect(wrapper.find('.Post__Comments').text()).toEqual(`${data.comments} comments`);
  expect(wrapper.find('.Vote__Score').text()).toEqual(data.score.toString());
});