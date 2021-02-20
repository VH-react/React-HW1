import React from "react";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import { Switch, withRouter, Route } from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import Gists from "./containers/Gists";

const routes = [
    { path: '/', name: 'Home', Component: Home, isExact: true },
    { path: '/gists', name: 'Gists', Component: Gists, isExact: false },
    { path: '*', name: 'Not Found', Component: NotFound, isExact: false }
]

const AnimatedSwitch = withRouter (({ location }) => (
        <TransitionGroup>
            <CSSTransition
                key = {location.key}
                classNames = "page"
                timeout = {300}
                unmountOnExit
            >
                <Switch location={location}>
                    {routes.map(({ path, Component, isExact }) => (
                        <Route key={path} exact={isExact} path={path}>
                            <Component />
                        </Route>
                    ))}
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
)

export default AnimatedSwitch;