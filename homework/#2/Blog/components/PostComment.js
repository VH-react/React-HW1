import React from 'react';
import { Comment } from 'semantic-ui-react'

const PostComment = props => {
  const { comment } = props;
  return (
    <React.Fragment>
        <Comment>
          <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>{comment.name}</Comment.Author>
            <Comment.Text>{comment.body}</Comment.Text>
          </Comment.Content>
        </Comment>
    </React.Fragment>
  );
}

export default PostComment;
