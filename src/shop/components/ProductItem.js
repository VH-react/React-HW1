import React from 'react';
import { Button, Card, Image } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cart";


function ProductItem({product}) {
    const dispatch = useDispatch();
    return (
        <Card>
            <Card.Content>
                <Image floated='left' size='mini' src={product.image}/>
                <Card.Header textAlign='right'>{product.title}</Card.Header>
                <Card.Description textAlign='center'>
                    Price: {product.price}$
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                <Button color='green' onClick={() => dispatch(addToCart(product.id))}>
                    Buy
                </Button>
                </div>
            </Card.Content>
        </Card>
    );
}

export default ProductItem;
