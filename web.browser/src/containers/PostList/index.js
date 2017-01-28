import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import Post from './../../components/Post';
import PostToolBar from './../../components/PostToolBar';
import { upVote, sortPop, sortNew, fetchPosts } from './../../actions/PostActions';


class PostList extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    const posts= this.props.posts;
    const filter = this.props.filter;
    console.log(posts);
    return posts
      .filter(post => post.categories.includes(filter))
      .map(post => (
        <Post
          title={post.title}
          key={parseInt(post.id, 2)}
          description={post.description}
          vote={post.votes}
          upVote={this.props.handleClickVote}
          categories={post.categories}
          id={post.id}
          />
      ));
  }

  render() {
    return (
      <div className={styles.postList}>
        <PostToolBar
          sortNewest={this.props.handleClickNew}
          sortPopular={this.props.handleClickPop}
          newStyle={{ backgroundColor: 'white' }}
          popularStyle={{ backgroundColor: 'white' }}
          />
        <ul>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  handleClickVote: PropTypes.func.isRequired,
  handleClickNew: PropTypes.func.isRequired,
  handleClickPop: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.filter,
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  handleClickVote: (id) => {
    dispatch(upVote(id));
  },
  handleClickPop: () => {
    dispatch(sortPop());
  },
  handleClickNew: () => {
    dispatch(sortNew());
  },
  fetchPosts: () => {
    dispatch(fetchPosts());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
