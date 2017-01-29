import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

const Week = ({ week, categories, filterClick }) => {
  return (
    <div>
      <List>
        <Subheader>{week}</Subheader>
        {categories.map((category, i) => (
          <Link
            to={`/posts/${category}`}
            style={{ textDecoration: 'none' }}
            key={category.i}
          >
            <ListItem
              primaryText={category}
              onClick={() => filterClick(category)}
              />
          </Link>
        ))
        }
      </List>
      <Divider />
    </div>
  );
};

Week.propTypes = {
  week: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  filterClick: PropTypes.func.isRequired,
};

export default Week;
