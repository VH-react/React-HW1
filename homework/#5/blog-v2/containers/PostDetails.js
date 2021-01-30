import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { Item } from 'semantic-ui-react';
import Comments from '../components/Comments';
import useData from '../hooks/useData';
import LoadingOverlay from "../components/LoadingOverlay";

function PostDetails() {
    const { postId } = useParams();
    const [post, isLoading, err] = useData(`/posts/${postId}`, null, {});

    if (err && err.status === 404) {
        window.history.back()
    }
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
                        <Link to={`/users/${post.userId}`}>Go to Author's Page</Link>
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