import React, { PropTypes } from 'react';
import slug from 'slug';
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
          <div key={i.toString()}>
            <Link
              to={`/posts/${slug(category, { lower: true })}`}
              style={{ textDecoration: 'none' }}
            >
              <ListItem
                primaryText={category}
                onClick={() => filterClick(category)}
                />
            </Link>
          </div>
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
