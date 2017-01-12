import React, { Component } from 'react';
import styles from './styles.css';
import Post from './../../components/Post';
import * as data from '../../mock-data';

class PostList extends Component {
  constructor() {
    super();
    this.state = {
      post: data.data.posts
    }
  }
  handleClick(item) {
    const newPost = this.state.post.map((popo) => {
      if (popo.id === item.id) {
        popo.votes +=1
      }
      return popo
    })
    this.setState({ post: newPost })
  }

  render() {
    let short = data.data.posts
    return (
      <div className={styles.postList}>
        <ul>
          {short.map((post) => (
            <Post
              title={post.title}
              key={post.id}
              description={post.description}
              vote={post.votes}
              updateVote={this.handleClick.bind(this, post)}
              />
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;