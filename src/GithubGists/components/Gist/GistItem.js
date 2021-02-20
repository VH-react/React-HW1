import React from 'react';
import {List} from "semantic-ui-react";
import {Link} from "react-router-dom";

function GistItem({ gist: {files, id} }) {
    return (
        <List.Item>
            <List.Content>
                <List.Header>
                    <Link to={`/gists/${id}`}>{files.map(({filename}) => filename).join(', ')} / {files.map(({type}) => type).join(', ')}</Link>
                </List.Header>
            </List.Content>
        </List.Item>
    );
}

export default GistItem;