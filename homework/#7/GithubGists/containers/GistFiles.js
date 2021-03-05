import React, { useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useParams, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {Container, Image, Label, Header, Card} from "semantic-ui-react";
import {loadFiles} from "../redux/async/fetchData";
import { getChosenGistById } from "../redux/selectors/gists";
import { getFilesByGistId, getFilesFetching } from "../redux/selectors/files";
import LoadingOverlay from "../components/LoadingOverlay";

function GistFiles() {
    const { gistId } = useParams();
    const selectedGists = useSelector(state => getChosenGistById(state, gistId));
    const dispatch = useDispatch();
    useEffect(() => {
        if (selectedGists) {
            dispatch(loadFiles({files: selectedGists.files, gistId}))
        }
    }, [dispatch, gistId, selectedGists]);
    const files = useSelector(state => getFilesByGistId(state, gistId));
    const loading = useSelector(getFilesFetching);
    if (!selectedGists) {
        return <Redirect to='/gists' />
    }
    return (
        <Container>
            <LoadingOverlay active={loading} />
            {
                files.map(file =>
                    <div key={file.filename}>
                        <Header as='h3'>
                            {file.filename}
                        </Header>
                        <SyntaxHighlighter language={file.language && file.language.toLowerCase()} style={darcula}>
                            {file.fileContent}
                        </SyntaxHighlighter>
                    </div>
                )
            }
            <Card style={{width: '100%'}}>
                <div style={{textAlign: 'center', margin: '10px 0px'}}>
                    <Label as='a'>
                        <Image avatar spaced='right' src={selectedGists.owner.avatar_url} />
                         by {selectedGists.owner.login}
                    </Label>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: '10px'}}>
                    <Label as='a' color='blue' image>
                        <img src='https://image.flaticon.com/icons/png/512/32/32441.png' alt="followers" />
                        {selectedGists.owner.followers_url.length}
                        <Label.Detail>Followers</Label.Detail>
                    </Label>
                    <Label as='a' color='green' image>
                        <img src='https://img.icons8.com/ios/452/repository.png' alt="repositories" />
                        {selectedGists.owner.repos_url.length}
                        <Label.Detail>Repos</Label.Detail>
                    </Label>
                    <Label as='a' color='red' image>
                        <img src='https://cdn0.iconfinder.com/data/icons/octicons/1024/gist-512.png' alt="gists" />
                        {selectedGists.owner.gists_url.length}
                        <Label.Detail>Gists</Label.Detail>
                    </Label>
                </div>
            </Card>
        </Container>
    );
}

export default GistFiles;
