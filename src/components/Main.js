import React from 'react';
import Sidebar from './Sidebar';
import PostList from './PostList';
import { Route } from 'react-router-dom';
import styled from 'styled-components/macro';


import './Main.css';
import PostListContainer from '../containers/PostListContainer';

import CommentsViewContainer from '../containers/CommentsViewContainer';

const Main = props => (
  <div className='content'>
    <Sidebar/>
    <main className='main'>
      <Route exact path='/' component={PostListContainer}></Route>
      <Route exact path='/:category' render={({match}) => <PostListContainer category={match.params.category}/>}> </Route>
      <Route exact path='/:post' render={({match}) => <CommentsViewContainer id={match.params.id}/>}></Route>
    </main>
  </div>
);

export default Main;