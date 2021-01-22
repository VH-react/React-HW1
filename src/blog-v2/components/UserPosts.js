import React from 'react'
import { Container, Item } from 'semantic-ui-react';
import useData from '../hooks/useData';
import LoadingOverlay from "./LoadingOverlay";
import PostItem from "./PostItem"

function UserPosts(props) {
    const [posts, isFetching] = useData('/posts', []);

    return (
        <Container>
          <LoadingOverlay active={isFetching} />
            <Item.Group className='posts'>
                {posts.map(post => post.userId === props.userId ? <PostItem post={post} key={post.id} id={post.id}/> : null)}
            </Item.Group>
        </Container>
    )
}

export default UserPosts
