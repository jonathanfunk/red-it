import React, { PropTypes } from 'react';
import styles from './styles.css';
import { Card } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';

const Post = ({ title, description, vote, updateVote, categories }) => (
  <li className={styles.post}>
    <Card style={{ padding: '20px' }}>
      <h3 style={{ marginTop: '0' }}>{title}</h3>
      <p>{description}</p>
      <div className={styles.buttons}>
        <FlatButton onClick={updateVote}>
          ▴ Vote {vote}
        </FlatButton>
        <ul>
          {categories.map(category => (<li><Chip key={category}>{category}</Chip></li>))}
        </ul>
      </div>
    </Card>
  </li>
);

Post.propTypes = {
  title: PropTypes.string.isRequired, // eslint-disable-line
  description: PropTypes.string.isRequired, // eslint-disable-line
  vote: PropTypes.number.isRequired, // eslint-disable-line
  updateVote: PropTypes.func.isRequired, // eslint-disable-line
  categories: PropTypes.array.isRequired // eslint-disable-line
};

export default Post;
