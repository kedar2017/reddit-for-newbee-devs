import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';

import Main from './Main';

import './App.css';
import Post from './Post';

const App = props => (
  <Router>
    <div className='app'>
      <Header/>
      <Route path='/' component={Main}/>
      <Post title="What's up dog?" comments="Yoooo!"/>
    </div>
  </Router>
);

export default App;
