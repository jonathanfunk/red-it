import React, { Component, PropTypes } from 'react';
import Week from '../../components/Week';
import styles from './styles.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

class Categories extends Component {
  render() {
    return (
       <Drawer>
        <div className={styles.app}>
          <AppBar
            title="RED it"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          {<Week />}
          <h2>Categories</h2>
        </div>
     </Drawer>
    );
  }
}

export default Categories;