import React from 'react'
import { Container, Item } from 'semantic-ui-react';
import useData from '../hooks/useData';
import LoadingOverlay from "../components/LoadingOverlay";
import PostItem from "../components/PostItem"

function Posts() {
    const [posts, isFetching] = useData('/posts', []);

    return (
        <Container>
          <LoadingOverlay active={isFetching} />
            <Item.Group className='posts'>
                {posts.map(post => <PostItem post={post} key={post.id} id={post.id}/>)}
            </Item.Group>
        </Container>
    )
}

export default Posts