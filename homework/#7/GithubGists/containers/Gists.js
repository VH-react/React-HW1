import React, {useEffect} from 'react';
import {Container, Grid} from "semantic-ui-react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GistList from "../components/Gist/GistList";
import {loadGists} from "../redux/async/fetchData";
import GistFiles from "./GistFiles";
import { getGistFetching, getGists } from "../redux/selectors/gists";
import LoadingOverlay from "../components/LoadingOverlay";

function Gists() {
    const { path } = useRouteMatch();
    const dispatch = useDispatch();
    const gists = useSelector(getGists);
    const isFetching = useSelector(getGistFetching);
    useEffect(() => {
        dispatch(loadGists());
    }, [dispatch]);
    return (
        <Container>
            <LoadingOverlay active={isFetching} />
            <Grid>
                <Grid.Column width={7}>
                    <GistList gists={gists} />
                </Grid.Column>
                <Grid.Column width={9}>
                    <Switch>
                        <Route path={`${path}/:gistId`} exact>
                            <GistFiles />
                        </Route>
                    </Switch>
                </Grid.Column>
            </Grid>
        </Container>
    );
}

export default Gists;
