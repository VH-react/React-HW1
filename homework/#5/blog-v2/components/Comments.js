import React from 'react'
import { Comment } from 'semantic-ui-react';
import useData from '../hooks/useData';
import LoadingOverlay from "./LoadingOverlay";

export default function Comments({ postId }) {
    const [comments, isLoading] = useData(`/posts/${postId}/comments`, [])
    return (
        <Comment.Group>
            <LoadingOverlay active={isLoading} />
                { comments.map(comment => (
                    <Comment key={comment.id}>
                        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                        <Comment.Content>
                            <Comment.Author>
                                {comment.email}
                            </Comment.Author>
                            <Comment.Text>
                                {comment.body}
                            </Comment.Text>
                        </Comment.Content>
                    </Comment>
                )) }
        </Comment.Group>
    )
}
