import React from 'react';
import './blog-v2.css';
import { Container, Header, Menu  } from 'semantic-ui-react';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import AnimatedSwitchMain from './components/AnimatedSwitch'

export default function BlogV2 () {
  
  return (
    <Container>
      <Router>
        <Header>
          <NavLink to='/'>Blog v2</NavLink>
        </Header>
        <Menu>
          <NavLink to='/users' className='item'>Users</NavLink>
          <NavLink to='/posts' className='item'>Posts</NavLink>
          <NavLink to='/about' className='item'>About</NavLink>
        </Menu>
        <AnimatedSwitchMain />
      </Router>
    </Container>
  )
}
