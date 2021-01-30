import React, { useMemo } from 'react';
import { Label, List } from "semantic-ui-react";

function CartTotal({ cartProducts }) {
    const totalPrice = useMemo(() => {
        return cartProducts.reduce((sum, product) => {
            return sum + (product.price * product.quantity)
        }, 0);
    }, [cartProducts]);

    return (
        <List.Item className='cart-summary-row'>
            <List.Content floated='right'>
                    <Label as='a' color='teal'>
                        Total
                    <Label.Detail>{totalPrice}$</Label.Detail>
                </Label>
            </List.Content>
        </List.Item>
    );
}

export default CartTotal;
