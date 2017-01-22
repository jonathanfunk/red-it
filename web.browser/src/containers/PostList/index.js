import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import Post from './../../components/Post';
import PostToolBar from './../../components/PostToolBar';
import { upVote } from './../actions';
import { bindActionCreators } from 'redux';


class PostList extends Component {
  render() {
    const posts = this.props.posts;
    console.log('waka', posts);
    return (
      <div className={styles.postList}>
        <PostToolBar
          sortNewest={console.log('Newest')}
          sortPopular={console.log('Popular')}
          orderBy={console.log("Hello!")}
          newStyle={{ backgroundColor: 'white' }}
          popularStyle={{ backgroundColor: 'white' }}
          />
        <ul>
          {posts.map(post => (
            <Post
              title={post.title}
              key={parseInt(post.id, 2)}
              description={post.description}
              vote={post.votes}
              updateVote={() => post.handleClick(post.id)}
              categories={post.categories}
              />
          ))}
        </ul>
      </div>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired, // eslint-disable-line
};

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  handleClick(id) {
    dispatch(upVote(id));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(PostList);
