import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { Container, Item } from 'semantic-ui-react';
import useData from '../hooks/useData';
import LoadingOverlay from "../components/LoadingOverlay";

function Posts() {
    const { userId } = useParams(); 
    const path = userId ? `/users/${userId}/posts` : '/posts'
    const [posts, isFetching] = useData(path, []);

    return (
        <Container>
            {userId ? <h2>User's Posts</h2> : <h2>Posts</h2>}
          <LoadingOverlay active={isFetching} />
            <Item.Group className='posts'>
                {posts.map(post => 
                    <Item key={post.id}>
                        <Item.Content>
                            {posts && <Item.Header><Link to={{pathname:`/posts/${post.id}`}}>{post.title}</Link></Item.Header> }
                            <Item.Extra>
                                <span>Author ID: {post.userId}</span>
                            </Item.Extra>
                        </Item.Content>
                    </Item>)
                }
            </Item.Group>
        </Container>
    )
}

export default Posts