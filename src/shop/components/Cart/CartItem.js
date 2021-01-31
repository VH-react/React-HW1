import React from 'react';
import { Button, Image, List } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cart";

function CartItem({ product }) {
    const dispatch = useDispatch();
    const addMoreProducts = () => dispatch(addToCart(product.id));
    const removeProducts = () => dispatch(removeFromCart(product.id));

    return (
      <List.Item>
            <List.Content>
                <h3><Image avatar src={product.image}/>{product.title}</h3>
                <span>{product.quantity} {product.quantity > 1 ? "piece's" : "piece" } - {product.price * product.quantity}$</span>
                <List.Content floated='right'>
                    <Button circular color="green" onClick={addMoreProducts}>+</Button>
                    <Button circular color="red" onClick={removeProducts}>-</Button>
                </List.Content>
            </List.Content>
      </List.Item>
    );
}

export default CartItem;
