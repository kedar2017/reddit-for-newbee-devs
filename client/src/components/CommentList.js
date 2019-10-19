import React from 'react';
import Comment from './Comment';
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

const mapComments = comments => comments.map((comment, index) => (
  <Item key={index} className='post-list__item'>
    <Comment {...comments} />
  </Item>
));

const CommentList = props => (
  <List className='post-list'>
    {props.comments ? mapComments(props.comments) : null}
  </List>
);

export default CommentList;