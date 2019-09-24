import React from 'react';
import Sidebar from './Sidebar';
import PostList from './PostList';

import './Main.css';

const Main = props => (
  <div className='content'>
    <Sidebar/>
    <main className='main'>
      <PostList posts={props.posts}/>
    </main>
  </div>
);

export default Main;