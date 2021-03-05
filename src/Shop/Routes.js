import { Container, Header, Menu } from "semantic-ui-react";
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import React, { useEffect } from "react";
import Products from "./containers/Products";
import Cart from "./containers/Cart";
import Register from "./containers/Register";
import NotFoundPage from "./containers/404";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/slices/products";
import Login from "./containers/Login";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import { getCurrentAuthState } from "./redux/selectors/auth";
import {fetchSession, logout} from "./redux/slices/auth";
import LoadingOverlay from "./components/LoadingOverlay";
import PrivateRoute from "./PrivateRoute";

export default function Blog() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchSession());
  }, []);
  const { hasLoaded, user } = useSelector(getCurrentAuthState);
  if (!hasLoaded) {
    return <LoadingOverlay active={true} />
  }
  const onLogOut = data => {
    dispatch(logout(data))
  }
  return (
    <Container>
      <Router>
        <Header style={{display: "flex", justifyContent:"space-between"}}>
          <NavLink to='/' activeClassName='active-nav'>Shop</NavLink>
          {user && <NavLink as='button' style={{color:"red"}} to='/' activeClassName='active-nav' onClick={onLogOut}>Log Out</NavLink>}
        </Header>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signup' exact component={Register} />
          <Route path='/signin' exact component={Login} />
          <PrivateRoute path='/products' user={user} exact component={Products} />
          <PrivateRoute path='/cart' user={user} component={Cart} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </Router>
    </Container>
  )
}
