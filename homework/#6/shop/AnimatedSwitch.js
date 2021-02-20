import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Products from "./containers/Products";
import Cart from "./containers/Cart"


const routes = [
    { path: '/', name: 'Home', Component: Home, isExact: true },
    { path: '/products', name: 'Products', Component: Products, isExact: true },
    { path: '/cart', name: 'UserDetails', Component: Cart, isExact: false },
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
