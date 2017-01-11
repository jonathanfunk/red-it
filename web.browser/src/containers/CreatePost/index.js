import React, { Component, PropTypes } from 'react';
import styles from './styles.css'
import Post from '../../components/Post';
class CreatePost extends Component {
  render() {
    return (
      <div>
        {<Post />}
        <h2>CreatePost</h2>
      </div>
    );
  }
}

export default CreatePost;