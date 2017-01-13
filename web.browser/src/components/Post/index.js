import React, { PropTypes } from 'react';
import styles from './styles.css';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';

const Post = ({title, description, vote, updateVote, categories}) => (
  <li className={styles.post}>
    <Card style={{padding: '20px'}}>
        <h2 style={{marginTop: '0'}}>{title}</h2>
        <p>{description}</p>
      <div className={styles.buttons}>
        <FlatButton onClick={updateVote}>
          ▴ Vote {vote}
        </FlatButton>
        <ul>
         {categories.map((category, i) => (<li><Chip key={i}>{category}</Chip></li>))}
        </ul>
      </div>
    </Card>
  </li>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  updateVote: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
};

export default Post;