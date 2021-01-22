import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { Item } from 'semantic-ui-react';
import Comments from './Comments';
import useData from '../hooks/useData';
import LoadingOverlay from "./LoadingOverlay";

function PostDetails() {
    const { postId } = useParams();

    const [post, isLoading] = useData(`/posts/${postId}`, null);
    const [user] = useData(`/users/`);
    return (
        <Item>
            <LoadingOverlay active={isLoading} />
            {post &&
                <Item.Content>
                    <Item.Header as='h1'>{post.title}</Item.Header>
                    <Item.Description as='h4'>
                        {post.body}
                    </Item.Description>
                    <Item.Extra>
                        {user && <Link to={`/users/${post.userId}`}>Go to {user ? user.name : 'Author'}</Link> }
                    </Item.Extra>
                    <Item.Extra>
                        Comments
                    </Item.Extra>
                    <Item.Extra>
                        <Comments postId={post.id} />
                    </Item.Extra>
                </Item.Content>
            }
        </Item>
    )
}

export default PostDetails