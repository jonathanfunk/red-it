import React, { PropTypes } from 'react';
import styles from './styles.css';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';

const Post = ({title, description, vote, updateVote, categories}) => (
  <li className={styles.post}>
    <Card>
      <CardHeader>
        <h2>{title}</h2>
      </CardHeader>
      <CardText>
        <p>{description}</p>
      </CardText>
      <FlatButton onClick={updateVote}>
        Vote {vote}
      </FlatButton>
      {categories.map((category, i) => (<Chip key={i}>{category}</Chip>))}
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