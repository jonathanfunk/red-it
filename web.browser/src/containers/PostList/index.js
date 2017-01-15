import React, { Component } from 'react';
import styles from './styles.css';
import Post from './../../components/Post';
import PostToolBar from './../../components/PostToolBar'
import * as data from '../../mock-data';

class PostList extends Component {
  constructor() {
    super();
    this.state = {
      post: data.data.posts,
      orderBy: "newest"
    }
    this.sortPopular = this.sortPopular.bind(this);
    this.sortNewest = this.sortNewest.bind(this);
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
    const descending = (this.state.post.sort((a,b)=> b.votes > a.votes ? 1 : -1));
    this.setState({ post: descending, orderBy: "popular" })
    console.log(this.state.orderBy === "newest")
  }
  
  sortNewest(){
    const descending = (this.state.post.sort((a,b)=> b.id > a.id ? 1 : -1));
    this.setState({ post: descending,
      orderBy: "newest"
    })
  }

  render() {
    let {post, orderBy } = this.state;

    return (
      <div className={styles.postList}>
        <PostToolBar 
          sortNewest={this.sortNewest.bind(this, post)} 
          sortPopular={this.sortPopular.bind(this, post)} 
          orderBy={orderBy}
          newStyle={this.state.orderBy === "newest" ? {backgroundColor: 'white'} : {backgroundColor: '#E8E8E8'}}
          popularStyle={this.state.orderBy === "popular" ? {backgroundColor: 'white'} : {backgroundColor: '#E8E8E8'}}
          />
        <ul>
          {post.map((post) => (
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