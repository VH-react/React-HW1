import React from 'react'
import {Container, Header, Menu} from "semantic-ui-react";
import {BrowserRouter as Router, NavLink } from "react-router-dom";
import AnimatedSwitch from "./AnimatedSwitch";

export default function Routes () {
    return (
        <Container>
            <Router>
                <Header>
                    <NavLink to='/' activeClassName='active-nav'>Github Gists</NavLink>
                </Header>
                <Menu>
                    <NavLink to='/' exact className='item' activeClassName='active-nav'>Home</NavLink>
                    <NavLink to='/gists' className='item' activeClassName='active-nav'>Gists</NavLink>
                </Menu>
                <AnimatedSwitch />
            </Router>
        </Container>
    )
}
