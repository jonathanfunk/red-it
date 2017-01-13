import React, { Component } from 'react';
import Week from '../../components/Week';
import styles from './styles.css';
import IconButton from 'material-ui/IconButton';
import CommunicationImportContacts from 'material-ui/svg-icons/communication/import-contacts';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

class Categories extends Component {
  render() {
    return (
      <aside className={styles.categories}>
        <Drawer>
          <AppBar
            title={<span>RED it</span>}
            iconElementLeft={<IconButton><CommunicationImportContacts/></IconButton>}
          />
          <Week />
          <h2>Categories</h2>
        </Drawer>
      </aside>
    );
  }
}

export default Categories;