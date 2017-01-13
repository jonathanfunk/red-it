import React, { PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

const Week = ({week, categories}) => {
  return (
    <div>
      <List>
        <Subheader>{week}</Subheader>
        {categories.map((x, i) => (<ListItem key={i} primaryText={x}/>))}
      </List>
      <Divider />
    </div>
  );
}

Week.propTypes = {
  week: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
};

export default Week;