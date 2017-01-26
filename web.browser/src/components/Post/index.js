import React, { PropTypes } from 'react';
import styles from './styles.css';
import { Card } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';


const Post = ({ title, description, vote, upVote, categories, id }) => (
  <li className={styles.post}>
    <Card style={{ padding: '20px' }}>
      <h3 style={{ marginTop: '0' }}>{title}</h3>
      <p>{description}</p>
      <div className={styles.buttons}>
        <FlatButton onClick={() => upVote(id)}>
          ▴ Vote {vote}
        </FlatButton>
        <ul>
          {categories.map(category => (<li key={category}><Chip>{category}</Chip></li>))}
        </ul>
      </div>
    </Card>
  </li>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  upVote: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
};

export default Post;
