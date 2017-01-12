import React, { Component } from 'react';
import Week from '../../components/Week';
import styles from './styles.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

class Categories extends Component {
  render() {
    return (
      <div className={styles.categories}>
        <Drawer>
          <AppBar
            iconClassName="muidocs-icon-communication-call"
            title="RED it"
            />
          <Week />
          <h2>Categories</h2>
        </Drawer>
      </div>
    );
  }
}

export default Categories;