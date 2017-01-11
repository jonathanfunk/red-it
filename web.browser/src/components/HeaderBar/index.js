import React, { PropTypes } from 'react';
import styles from './styles.css'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/check';
import FlatButton from 'material-ui/FlatButton';


/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onTouchTap` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const HeaderBar = () => (
  <AppBar
    iconElementRight={
      <div>
       <FlatButton label="Share a new Link" />
       <FlatButton label="Logout" />       
      </div>
    }
  />
);


export default HeaderBar;
