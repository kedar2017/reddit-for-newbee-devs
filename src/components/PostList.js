import React from 'react';
import './PostList.css';
import Post from './Post';
import { connect } from 'react-redux';

const filterPosts = (posts,category) =>{
  return posts.filter(function(post) {
    return category === post.category
  });
};

const sortPosts = posts => {return posts.sort((a,b)=> b.score - a.score)};

const mapPosts = posts => posts.map((post, index) => (
  <li key={index} className='post-list__item'>
    <Post
      score={post.score}
      title={post.title}
      url={post.url}
      author={post.author}
      timestamp={post.timestamp}
      comments={post.comments}
    />
  </li>
));

const PostList = props => (
  <ul className='post-list'>
    {props.posts ? mapPosts(sortPosts(filterPosts(props.posts,props.match.params.category))) : null}
  </ul>
);

const mapStateToProps = state => ({ posts: state.posts })

//export default PostList;
export default connect(mapStateToProps)(PostList);