import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import Post from './../../components/Post';
import PostToolBar from './../../components/PostToolBar';
import { upVote, sortPop, sortNew } from './../../actions/PostActions';


class PostList extends Component {

  render() {
    const posts = this.props.posts;
    const filter = this.props.filter;
    return (
      <div className={styles.postList}>
        <PostToolBar
          sortNewest={this.props.handleClickNew}
          sortPopular={this.props.handleClickPop}
          orderBy={console.log("Hello!")}
          newStyle={{ backgroundColor: 'white' }}
          popularStyle={{ backgroundColor: 'white' }}
          />
        <ul>
          {posts
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
            ))}
        </ul>
      </div>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired, // eslint-disable-line
  filter: PropTypes.string.isRequired, // eslint-disable-line
  handleClickVote: PropTypes.func.isRequired, // eslint-disable-line
  handleClickNew: PropTypes.func.isRequired, // eslint-disable-line
  handleClickPop: PropTypes.func.isRequired // eslint-disable-line
};

const mapStateToProps = state => ({
  posts: state.posts,
  filter: state.filter,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
