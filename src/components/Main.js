import React from 'react';
import Sidebar from './Sidebar';
import PostList from './PostList';
import { Route } from 'react-router-dom';

import './Main.css';

const Main = props => (
  <div className='content'>
    <Sidebar/>
    <main className='main'>
      <Route exact path='/' component={PostList}></Route>
      <Route path='/' component={PostList}></Route>
    </main>
  </div>
);

export default Main;