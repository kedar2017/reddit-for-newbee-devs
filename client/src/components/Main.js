import React from 'react';
import Sidebar from './Sidebar';
import PostList from './PostList';
import { Route } from 'react-router-dom';
import styled from 'styled-components/macro';


import './Main.css';
import PostListContainer from '../containers/PostListContainer';

import PostViewContainer from '../containers/PostViewContainer';

const Main = props => (
  <div className='content'>
    <Sidebar/>
    <main className='main'>
      <Route exact path='/' component={PostListContainer}></Route>
      <Route exact path='/:category' render={({match}) => <PostListContainer category={match.params.category}/>}> </Route>
      <Route exact path='/:post' render={({match}) => <PostViewContainer id={match.params.id}/>}></Route>
      <Route exact path='/' component={PostViewContainer}></Route>
    </main>
  </div>
);

export default Main;