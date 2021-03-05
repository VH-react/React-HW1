import React, { useMemo } from 'react';
import CardList from '../components/CartList';
import { Header } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductsInCart } from "../redux/selectors/cart";

function Cart() {
  const productsInCart = useSelector(getProductsInCart);

  if (productsInCart.length === 0) {
     return (
       <Header as='h2'>Go and <Link to='/'>buy</Link> something</Header>
     )
  }

  return (
    <CardList cartProducts={productsInCart} />
  );
}

export default Cart;
