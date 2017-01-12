import React, { Component, PropTypes } from 'react';
import styles from './styles.css'
import Categories from './../Categories'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        {this.props.children}
        <Categories />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
};

export default App;
