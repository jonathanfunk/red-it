import React, { Component } from 'react';
import styles from './styles.css'

class Welcome extends Component {
  render() {
    return (
      <div className={styles.welcome}>
        <h1>Welcome</h1>
      </div>
    );
  }
}

export default Welcome;