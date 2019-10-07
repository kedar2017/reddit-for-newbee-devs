import React from 'react';
import Header from './Header';

import Main from './Main';

import Post from './Post';

import { createGlobalStyle } from 'styled-components';

import Comment from './Comment';


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
      <Main/>
    </div>
);

export default App;
