import React from 'react'
import styled from 'styled-components/macro';
import Post from './Post';
import CommentForm from './CommentForm';
import CommentList from './CommentList';


const PostWrapper = styled.div`
margin-bottom: 16px;
border: 1px solid #eee;
`;

const CommentSection = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 16px;
`;

const CommentListWrapper = styled.div`
  flex: 3;
  margin-right: 16px;
`;

const CommentsView = props => {
    <>
        <PostWrapper>
            <Post
                score={props.post.score}
                title={props.post.title}
                url={props.post.url}
                author={props.post.author}
                timestamp={props.post.timestamp}
                comments={props.post.comments}
            />
        </PostWrapper>
        <CommentSection>
            <CommentListWrapper>
                {props.post && <CommentList comments = {props.post.comments}/>}
            </CommentListWrapper>
            <CommentForm/>
        </CommentSection>
    </>
}

export default CommentsView;