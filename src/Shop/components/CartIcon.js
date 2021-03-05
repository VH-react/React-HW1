import React from 'react';
import './CardIcon.css';
import { Icon } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { getTotalCount, getTotalPrice } from "../redux/selectors/cart";

function CartIcon() {
  const count = useSelector(getTotalCount);
  const totalAmount = useSelector(getTotalPrice);

  return (
    <div className='cart-icon'>
      <Icon name='cart' />
      {count > 0 && <span className='badge'>{count}</span> }
      {totalAmount > 0 && <span>Total: {totalAmount}$</span> }
    </div>
  );
}

export default CartIcon;
