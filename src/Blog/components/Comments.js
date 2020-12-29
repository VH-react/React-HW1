import React, { Component } from 'react';
import { Comment, Header, Dimmer, Loader, Segment } from "semantic-ui-react";
import PostComment from "./PostComment"

class Comments extends Component {
    state = {
        loading: false,
        comments: []
    }

    fetchComments() {
        this.setState({ loading: true });
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.postId}/comments`)
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

    componentDidMount () {
      this.fetchComments()
    }

    render() {
        const { comments, loading } = this.state;
        return (
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
          </Comment.Group>
        );
    }
}

export default Comments;
