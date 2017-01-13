import React, {PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';


const PostToolBar = ({sortNewest, sortPopular}) => (
   <Toolbar>
        <ToolbarGroup firstChild={true}>
          <ToolbarTitle text="Sort" />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text="Options" />
          <FlatButton onClick={sortNewest} label="Newest" />
          <FlatButton onClick={sortPopular} label="Popular"  />
        </ToolbarGroup>
      </Toolbar>
);

export default PostToolBar