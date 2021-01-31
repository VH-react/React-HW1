import React, { useMemo } from 'react';
import { Label, List } from "semantic-ui-react";

function TotalPrice({ cartProducts }) {
    const totalPrice = useMemo(() => {
        return cartProducts.reduce((sum, product) => {
            return sum + (product.price * product.quantity)
        }, 0);
    }, [cartProducts]);

    return (
        <List.Item className='cart-summary-row'>
            <List.Content floated='right'>
                    Total - <Label color="green" tag>{totalPrice}$</Label>
            </List.Content>
        </List.Item>
    );
}

export default TotalPrice;
