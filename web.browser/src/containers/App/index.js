import React, { Component, PropTypes } from 'react';

import styles from './styles.css'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
};

export default App;
