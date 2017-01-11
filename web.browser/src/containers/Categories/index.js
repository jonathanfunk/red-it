import React, { Component, PropTypes } from 'react';
import Week from '../../components/Week';
import styles from './styles.css'

class Categories extends Component {
  render() {
    return (
      <div className={styles.app}>
        {<Week />}
        <h2>Categories</h2>
      </div>
    );
  }
}

export default Categories;