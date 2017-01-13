import React, { Component } from 'react';
import styles from './styles.css';
import Post from './../../components/Post';
import FlatButton from 'material-ui/FlatButton';
import * as data from '../../mock-data';

const SortButtons = ({sortPopular}) => (
  <div>
    <FlatButton label="Newest" />
    <FlatButton onClick={sortPopular} label="Popular" />
  </div>
);

class PostList extends Component {
  constructor() {
    super();
    this.state = {
      post: data.data.posts,
      orderBy: "newest"
    }
    this.sortPopular = this.sortPopular.bind(this);
  }

  handleClick(item) {
    const newPost = this.state.post.map((post) => {
      if (post.id === item.id) {
        post.votes +=1
      }
      return post
    })
    this.setState({ post: newPost })
  }

  sortPopular(){
    const descending = (this.state.post.sort((a,b)=> b.votes - a.votes));
    this.setState({ post: descending,
      orderBy: "popular"
    })
  }

  render() {
    let short = data.data.posts
    return (
      <div className={styles.postList}>
      <SortButtons sortPopular={this.sortPopular} />
        <ul>
          {short.map((post) => (
            <Post
              title={post.title}
              key={post.id}
              description={post.description}
              vote={post.votes}
              updateVote={this.handleClick.bind(this, post)}
              categories={post.categories}
              />
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;