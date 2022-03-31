import React from 'react';
import { BsFillTrashFill } from "react-icons/bs";
import './Cart.css'

const Cart = props => {
  return (
    <div className='cart-container-div d-flex flex-column d-lg-flex flex-lg-row justify-content-lg-around align-items-center border my-1'>
      <div className='cart-img-div my-1 mx-1'>
        <img src={props.cartItem[1]} alt='airbud'/>
      </div>
      <div className='justify-self-start'>
        <div className='d-flex flex-column align-items-center align-items-lg-start mt-3 mt-lg-0 ms-lg-1 cart-text-div'>
          <h6 className='m-0 text-center'>{props.cartItem[0]}</h6>
          <h6 className='m-0'>$<span>{props.cartItem[2]}</span></h6>
        </div>
      </div>
      <div onClick={() => props.removeFrmCart(props.cartItem)} className='cart-remove-button'>
        <BsFillTrashFill className='my-2 mx-lg-3'/>
      </div>
    </div>
  );
};

export default Cart;