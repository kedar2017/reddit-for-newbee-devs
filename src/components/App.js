import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';

import Main from './Main';

import './App.css';

const App = props => (
  <Router>
    <div className='app'>
      <Header subreddit='all'/>
      <Route exact path='/' component={Main}/>
    </div>
  </Router>
);

export default App;
