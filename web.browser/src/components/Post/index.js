import React, { PropTypes } from 'react';
import styles from './styles.css';
import { Card } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';


const Post = ({ postLink, title, description, vote, upVote, categories, id }) => (
  <li className={styles.post}>
    <Card style={{ padding: '20px' }}>
      <a href={postLink} target="_blank"><h3 style={{ marginTop: '0' }}>{title}</h3></a>
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
  postLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  upVote: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
};

export default Post;
