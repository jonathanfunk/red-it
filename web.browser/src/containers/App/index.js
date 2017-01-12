import React, { Component, PropTypes } from 'react';
import Categories from '../Categories';
import Welcome from '../Welcome';
import Login from '../Login';
import CreatePost from '../CreatePost';
import PostList from '../PostList';
import styles from './styles.css'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        {<Categories />}
        {<PostList />}
        {<Welcome />}
        {<Login />}
        {<CreatePost />}
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
};

export default App;
