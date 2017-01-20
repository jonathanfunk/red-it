import React, { Component } from 'react';
import styles from './styles.css';
import Post from './../../components/Post';
import PostToolBar from './../../components/PostToolBar';
import { connect } from 'react-redux';
import { upVote } from './../actions';
import * as data from '../../mock-data';

class PostList extends Component {
  render() {
    const posts = data.data.posts;
    console.log(posts);
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
          {posts.map((post) => (
            <Post
              title={post.title}
              key={post.id}
              description={post.description}
              vote={post.votes}
              updateVote={console.log('Newest')}
              categories={post.categories}
              />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post,
});

const mapDispatchToProps = dispatch => ({
  handleClick: (students) => {
    dispatch(upVote(students));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
