import React from 'react';
import styles from './styles.css'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onTouchTap` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const HeaderBar = () => (
  <AppBar
    iconElementRight={
      <div className={styles.nav}>
       <FlatButton label="Share a new Link" />
       <FlatButton label="Logout" />       
      </div>
    }
  />
);


export default HeaderBar;
