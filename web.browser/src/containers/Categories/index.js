import React, { Component } from 'react';
import Week from '../../components/Week';
import styles from './styles.css';
import IconButton from 'material-ui/IconButton';
import CommunicationImportContacts from 'material-ui/svg-icons/communication/import-contacts';
import * as data from '../../mock-data';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      weeks: data.data.weeks,
    }
  }

  render() {
    let {weeks} = this.state;
    console.log(weeks)
    return (
      <aside className={styles.categories}>
        <Drawer>
          <AppBar
            title={<span>RED it</span>}
            iconElementLeft={<IconButton><CommunicationImportContacts /></IconButton>}
            />
          {weeks.map((x, i) => (
            <Week
              key={i} 
              week={x.title}
              categories={x.categories}
            />
          ))}
        </Drawer>
      </aside>
    );
  }
}

export default Categories;