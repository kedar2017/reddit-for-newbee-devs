import React from 'react';
import './Header.css';
import styled from 'styled-components/macro';


const Header = props => (
      <header className='header'>
        <div className='header__main'>
          <h1 className='header__logo'>Welcome newbees</h1>
          {
            props.subreddit ? 
            <h2 className="header__subreddit">r/{props.subreddit}</h2> : null
          }
          
        </div>
        <div className="header__links">
          <a href="/" className="header__link">log in</a>
          <a href="/" className="header__link">sign up</a>
        </div>
      </header>
    );

export default Header;