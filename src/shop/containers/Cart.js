import React, { useMemo } from 'react';
import CardList from '../components/Cart/CartList';
import { Header } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
    const products = useSelector(state => state.products.data);
    const cart = useSelector(state => state.cart);

    const productsInCart = useMemo(() => {
        return cart.map(({ id, quantity }) => {
            const foundProduct = products.find(product => product.id === id);
            if (!foundProduct) return;
            const { image, price, title } = foundProduct;
            return {
                id, quantity, image, price, title
            }
        });
    }, [products, cart]);

    if (products.length === 0 || cart.length === 0) {
        return (
            <Header as='h2'>To <Link to='/products'>Shop</Link></Header>
        )
    }

    return (
        <CardList cartProducts={productsInCart} />
    );
}

export default Cart;
