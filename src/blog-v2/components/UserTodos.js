import React from 'react'
import { Container, Item } from 'semantic-ui-react';
import useData from '../hooks/useData';
import LoadingOverlay from "./LoadingOverlay";
import TodoItem from "./TodoItem"

function UserPosts(props) {
    const [todos, isFetching] = useData('/todos', []);

    return (
        <Container>
          <LoadingOverlay active={isFetching} />
            <Item.Group className='posts'>
                {todos.map(todo => todo.userId === props.userId ? <TodoItem todo={todo} key={todo.id} id={todo.id}/> : null)}
            </Item.Group>
        </Container>
    )
}

export default UserPosts