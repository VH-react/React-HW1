import React, { Component } from 'react';
import { Feed } from "semantic-ui-react";
import Comments from "./Comments"

class PostItem extends Component {
  state = {
    areCommentsDisplayed: false
  }

  onClickHandler = e => {
    this.setState({
      areCommentsDisplayed: !this.state.areCommentsDisplayed
    })
    this.props.onClick(e)
  }

  render() {
    const { post } = this.props;
    const { areCommentsDisplayed } = this.state;
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
          areCommentsDisplayed ? <Comments postId={post.id} /> : null
        }
      </React.Fragment>
    );
  }
}

export default PostItem;