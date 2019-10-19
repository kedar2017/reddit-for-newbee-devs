import React from 'react';
import './PostList.css';
import Post from './Post';
import styled from 'styled-components/macro';

const List = styled.ul`
list-style: none;
border: 1px solid #eee;
`;
const Item = styled.li`
:not(:first-child) {
  border-top: 1px solid #eee;
}
`;

const mapPosts = posts => posts.map((post, index) => (
  <Item key={index} className='post-list__item'>
    <Post
      score={post.score}
      title={post.title}
      url={post.url}
      author={post.author}
      timestamp={post.timestamp}
      comments={post.comments}
    />
  </Item>
));

const PostList = props =>
  <List>
    {props.posts && mapPosts(props.posts)}
  </List>


export default PostList;