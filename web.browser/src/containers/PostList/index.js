import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import Post from './../../components/Post';
import PostToolBar from './../../components/PostToolBar';
import { upVote } from './../../actions/PostActions';


class PostList extends Component {
  render() {
    const posts = this.props.posts;
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
              updateVote={(e) => {
                post.handleClick(post);
                e.preventDefault();
              }}
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
  handleClick: PropTypes.func.isRequired, // eslint-disable-line
};

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  handleClick(posts) {
    dispatch(upVote(posts));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(PostList);
