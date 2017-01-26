import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

const Week = ({ week, categories }) => {
  return (
    <div>
      <List>
        <Subheader>{week}</Subheader>
        {categories.map((category, i) => (
          <ListItem key={i} primaryText={category} />
          ))
        }
      </List>
      <Divider />
    </div>
  );
}

Week.propTypes = {
  week: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf.isRequired,
};

export default Week;
