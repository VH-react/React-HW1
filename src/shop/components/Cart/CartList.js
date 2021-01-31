import React from 'react';
import { List } from "semantic-ui-react";
import CartItem from './CartItem';
import TotalPrice from "./TotalPrice";

function CartList({ cartProducts }) {
    return (
        <List divided style={{ width: '70%' }} size='huge'>
            {cartProducts.map(product => (
                <CartItem key={product} product={product} />
            ))}
            <TotalPrice cartProducts={cartProducts} />
        </List>
    )
}

export default CartList;
