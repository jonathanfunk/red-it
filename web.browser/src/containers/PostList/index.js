import React, { Component } from 'react';
import styles from './styles.css';
import Post from './../../components/Post';
import * as data from '../../mock-data';

class PostList extends Component {
  render() {
    let short = data.data.posts
    console.log(short)
    return (
      <div className={styles.postList}>
        {short.map((yo, i) => (
            <Post
              title={yo.title}
              key={i}
              description={yo.description}
              vote={0}
              />
          ))}
      </div>
    );
  }
}

export default PostList;