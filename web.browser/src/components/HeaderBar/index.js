import React from 'react';
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

const HeaderBar = () => (
  <AppBar
    style={{
      position: 'fixed',
    }}
    iconElementLeft={
      <IconButton>
        <NavigationClose />
      </IconButton>
    }
    iconElementRight={
      <div>
        <Link to="/posts/new">
          <FlatButton
            label="Share a new link"
            style={{
              color: 'white',
            }}
          />
        </Link>
        <Link to="/">
          <FlatButton
            label="Logout"
            style={{
              color: 'white',
            }}
          />
        </Link>
      </div>
    }
  />
);

export default HeaderBar;
