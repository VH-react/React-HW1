import React from 'react';
import { Button, Image, List } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/cart";

function CartListItem({ product }) {
    const dispatch = useDispatch();
    const addMoreProducts = () => dispatch(addToCart(product.id));

    const removeProducts = () => product.quantity === 1 ? dispatch(removeFromCart(product.id)) : dispatch(removeFromCart(product.id));

    return (
      <List.Item>
            <List.Content floated='right'>
                <Button icon onClick={addMoreProducts}>+</Button>
                <Button icon onClick={removeProducts}>-</Button>
            </List.Content>
            <List.Content>
                <Image avatar src={product.image}/>
                {product.title}
                <br/>
                <span className='muted'>{product.quantity} {product.quantity > 1 ? "piece's" : "piece" } - {product.price * product.quantity}$</span>
            </List.Content>
      </List.Item>
    );
}

export default CartListItem;
