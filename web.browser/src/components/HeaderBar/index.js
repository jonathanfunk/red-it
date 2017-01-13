import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
//import styles from './styles.css'

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onTouchTap` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const HeaderBar = () => (
  <AppBar style={{position: 'fixed'}}
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={<div><FlatButton label="Share a new link" style={{color: 'white'}} /><FlatButton label="Logout" style={{color: 'white'}} /></div>}
  />
);

export default HeaderBar;
