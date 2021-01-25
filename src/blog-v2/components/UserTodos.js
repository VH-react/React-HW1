import React from 'react'
import { useParams, Redirect } from 'react-router-dom';
import { Container, Item } from 'semantic-ui-react';
import useData from '../hooks/useData';
import LoadingOverlay from "./LoadingOverlay";

function UserPosts() {
    const { userId } = useParams();
    const [todos, isFetching, err] = useData(`/users/${userId}/todos`, [], {});

    return (
        <Container>
            <h2>User's TODO's</h2>
          <LoadingOverlay active={isFetching} />
            <Item.Group className='posts'>
                { todos.map(todo =>
                    <Item key={todo.id}>
                        <Item.Content>
                            <Item.Header>{todo.title}</Item.Header> 
                            <Item.Extra>
                                Completed: {todo.completed ? "YES" : "NO"}
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                    )
                }
            </Item.Group>
        </Container>
    )
}

export default UserPosts