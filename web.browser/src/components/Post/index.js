import React, { PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Post = ({title, description, vote}) => (
  <Card>
    <CardHeader>
      <h2>{title}</h2>
    </CardHeader>
    <CardText>
      <p>{description}</p>
    </CardText>
    <FlatButton>
      Vote {vote}
    </FlatButton>
  </Card>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
};

export default Post;