import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { Item } from 'semantic-ui-react';
import useData from '../hooks/useData';
import LoadingOverlay from "./LoadingOverlay";

export default function PostItem({ post }) {
    const [posts, isLoading] = useData('/posts', []);
    const [user, , err] = useData(`/users/${post.userId}`, null ,{})
    
    // if (err && err.status === 404) {
    //     console.log(err);
    //     return <Redirect to={`/posts`} />
    // }

    return (
        <React.Fragment>
            <LoadingOverlay active={isLoading} />
            <Item>
                <Item.Content>
                    {posts && <Item.Header><Link to={{pathname:`/posts/${post.id}`}}>{post.title}</Link></Item.Header> }
                    <Item.Extra>
                        {user && <span>by {user ? user.name : 'Author'}</span> }
                    </Item.Extra>
                </Item.Content>
            </Item>
        </React.Fragment>
    )
}
