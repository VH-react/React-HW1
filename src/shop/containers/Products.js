import React from 'react';
import { useSelector } from "react-redux";
import { Container, Card } from "semantic-ui-react";
import ProductItem from "../components/ProductItem";
import LoadingOverlay from "../components/LoadingOverlay"

function Products() {
    const products = useSelector(state => state.products.data);
    const isLoading = useSelector(state => state.products.loading);
    return (
        <Container>
            <Card.Group>
                { isLoading && <LoadingOverlay active={isLoading}/> }
                {products.map(product => <ProductItem key={product.id} product={product}/>)}
            </Card.Group>
        </Container>
    );
}

export default Products;
