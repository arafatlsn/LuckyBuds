import React from 'react';
import './Cart.css'

const Cart = props => {
  console.log(props.cartItem[0], props.cartItem[1], props.cartItem[2])
  return (
    <div className='cart-container-div d-flex flex-column d-lg-flex flex-lg-row align-items-center border my-1'>
      <div className='cart-img-div my-1 mx-1'>
        <img src={props.cartItem[1]} alt='airbud'/>
      </div>
      <div className='d-flex flex-column align-items-center align-items-lg-start mt-3 mt-lg-0 ms-lg-1'>
        <h6 className='m-0 text-center'>{props.cartItem[0]}</h6>
        <h6 className='m-0'>$<span>{props.cartItem[2]}</span></h6>
      </div>
    </div>
  );
};

export default Cart;