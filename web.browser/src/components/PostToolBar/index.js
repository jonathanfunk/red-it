import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';


const PostToolBar = ({sortNewest, sortPopular, newStyle, popularStyle}) => (
  <Toolbar>
    <ToolbarGroup firstChild={true} style={{ paddingLeft: '20px',}}>
      <ToolbarTitle text="Posts" />
    </ToolbarGroup>
    <ToolbarGroup>
      <ToolbarTitle text="Sort:" />
      <FlatButton onClick={sortNewest} style={newStyle}label="Newest" />
      <FlatButton onClick={sortPopular} style={popularStyle}label="Popular" />
    </ToolbarGroup>
  </Toolbar>
);

// PostToolBar.propTypes = { { PropTypes }
//   sortNewest: PropTypes.func.isRequired,
//   sortPopular: PropTypes.func.isRequired,
//   newStyle: PropTypes.object.isRequired,
//   popularStyle: PropTypes.object.isRequired,
// };



export default PostToolBar