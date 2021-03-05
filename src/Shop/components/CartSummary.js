import React  from 'react';
import { useSelector } from "react-redux";
import { Button, Icon, Label, List } from "semantic-ui-react";
import { getTotalPrice } from "../redux/selectors/cart";

function CartSummary() {

  const totalPrice = useSelector(getTotalPrice);

  return (
    <List.Item className='cart-summary-row'>
      <List.Content floated='right'>
        <Button as='div' labelPosition='right'>
          <Button icon color='green'>
            <Icon name='dollar sign' style={{marginRight: 10}}/>
            Checkout
          </Button>
          <Label as='a' basic pointing='left'>
            {totalPrice}$
          </Label>
        </Button>
      </List.Content>
    </List.Item>
  );
}

export default CartSummary;
