import React, { Component } from 'react';
import { Feed, Comment, Header, Dimmer, Loader, Segment } from "semantic-ui-react";
import PostComment from "./PostComment"

class PostItem extends Component {
  state = {
    loading: false,
    comments: [],
    isClicked: false
  }

  uploadComments() {
    this.setState({ loading: true });
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.id}/comments`)
    .then(response => response.json())
    .then(comments => {
      this.setState({
        loading: false,
        comments
      })
    })
    .catch(e => {
      this.setState({
        comments: []
      });
    })
  }

  onClickHandler = e => {
    this.setState({
      isClicked: !this.state.isClicked
    })
    this.uploadComments()
    this.props.onClick(e)
  }

  render() {
    const { post } = this.props;
    const { comments, loading } = this.state;
    return (
      <React.Fragment>
        <Feed>
          <Feed.Event>
            <Feed.Label>
              <img src='https://react.semantic-ui.com/images/avatar/small/justen.jpg' alt='justen' />
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary onClick={this.onClickHandler}>
                <Feed.User>{post.title}</Feed.User>
              </Feed.Summary>
              <Feed.Extra text>
                {post.body}
              </Feed.Extra>
            </Feed.Content>
          </Feed.Event>
        </Feed>
        {
          this.state.isClicked ?
            <Comment.Group>
              <Header as='h3' dividing>
                Comments
              </Header>
              <Segment>
                <Dimmer active={loading} inverted>
                  <Loader inverted>Loading</Loader>
                </Dimmer>
                { comments.map(comment => <PostComment comment={comment} key={comment.id} id={comment.id} /> )}
              </Segment>
            </Comment.Group> : null
        }
      </React.Fragment>
    );
  }
}

export default PostItem;