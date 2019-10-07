import React from 'react';
import './Header.css';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 24px;
  margin-bottom: 32px;
  background-color: #282c34;
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  font-size: 26px;
  color: #ffffff;
`;

const Subreddit = styled.h2`
  margin: 0 0 0 24px;
  color: #ffffff;
`;

const NavLink = styled(Link)`
  color: #ffffff;
  :not(:first-child) {
    margin-left: 16px;
  }
`;

const Header = props => (
  <Wrapper>
    <LogoWrapper>
        <LogoLink to='/'>Welcome newbees</LogoLink>
        {props.subreddit && <Subreddit>r/{props.subreddit}</Subreddit>}
      <div>
        <NavLink to='/login'>log in</NavLink>
        <NavLink to='/signup'>sign up</NavLink>
      </div>
    </LogoWrapper>
  </Wrapper>);

export default Header;