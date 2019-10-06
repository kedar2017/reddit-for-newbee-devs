
import CommentsView from '../components/CommentsView';

import { connect } from 'react-redux';

const findPost = (posts,id) => posts.find(post => post.id === parseInt(id));

export const mapStateToProps = (state,ownProps) => ({posts: findPost(state.clone.posts,ownProps.id)});

export default connect(mapStateToProps)(CommentsView);