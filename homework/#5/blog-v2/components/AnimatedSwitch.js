import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Home from "../containers/Home";
import Users from "../containers/Users";
import About from "../containers/About";
import UserDetails from "../containers/UserDetails";
import Posts from "../containers/Posts"
import PostDetails from "../containers/PostDetails"
import NotFound from "../containers/NotFound";


const routes = [
    { path: '/', name: 'Home', Component: Home, isExact: true },
    { path: '/about', name: 'About', Component: About, isExact: true },
    { path: '/users/:userId', name: 'UserDetails', Component: UserDetails, isExact: false },
    { path: '/users', name: 'Users', Component: Users, isExact: true },
    { path: '/posts/:postId', name: 'PostDetails', Component: PostDetails, isExact: false },
    { path: '/posts', name: 'Posts', Component: Posts, isExact: true },
    { path: null, name: 'NotFound', Component: NotFound, isExact: false },
]

const AnimatedSwitchMain = withRouter (({ location }) => (
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

export default AnimatedSwitchMain;
