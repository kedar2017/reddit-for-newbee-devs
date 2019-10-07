import React from 'react';
import Header from './Header';

import Main from './Main';

import Post from './Post';

import { createGlobalStyle } from 'styled-components';

import Comment from './Comment';

import { Route, Switch } from 'react-router-dom';


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'IBM Plex Sans', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
  }
`;

const App = props => (
    <div className='app'>
      <Header/>
      <GlobalStyle/>
      <Switch>
        <Route path='/' component={Main}/>
      </Switch>
    </div>
);

export default App;
