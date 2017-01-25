import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

const HeaderBar = () => (
  <AppBar
    style={{ position: 'fixed' }}
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={<div><FlatButton label="Share a new link" style={{color: 'white'}} /><FlatButton label="Logout" style={{color: 'white'}} /></div>}
  />
);

export default HeaderBar;
