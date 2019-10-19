import React from 'react';
import { shallow } from 'enzyme';
import PostView from './PostView';

it('renders without crashing', () => {
  shallow(<PostView/>);
});

