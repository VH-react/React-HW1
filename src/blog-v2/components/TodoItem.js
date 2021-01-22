import React from 'react'
import { Item } from 'semantic-ui-react';
import useData from '../hooks/useData';
import LoadingOverlay from "./LoadingOverlay";

function TodoItem({ todo }) {
    const [todos, isLoading] = useData('/todos', []);

    return (
        <React.Fragment>
            <LoadingOverlay active={isLoading} />
            <Item>
                <Item.Content>
                    {todos && 
                        <React.Fragment>
                            <Item.Header>{todo.title}</Item.Header> 
                            <Item.Extra>
                                Completed: {todo.completed+""}
                            </Item.Extra>
                        </React.Fragment>
                    }
                </Item.Content>
            </Item>
        </React.Fragment>
    )
}

export default TodoItem