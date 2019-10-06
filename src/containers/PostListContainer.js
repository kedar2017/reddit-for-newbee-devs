import PostList from '../components/PostList';
import { connect } from 'react-redux';


const filterPosts = (posts,category) =>{
    return posts.filter(function(post) {
      if (!category) return posts;
      return category === post.category
    });
  };
  
const sortPosts = posts => {return posts.sort((a,b)=> b.score - a.score)};

const mapStateToProps = (state,ownProps) => ({ posts: sortPosts(filterPosts(state.clone.posts,ownProps.category)) });

//export default PostList;
export default connect(mapStateToProps)(PostList);