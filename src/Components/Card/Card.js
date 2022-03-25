import React from 'react';
import './Card.css'
import { BsCart3 } from "react-icons/bs";

const Card = ({product : {id, name, picture, price}, addCart, cart}) => {
  return (
    <div className='card-container-div border'>
      <div className='card-img-div d-flex justify-content-center align-items-center border-bottom'>
        <img src={picture} alt='airbuds'/>
      </div>
      <div className='card-text-div d-flex flex-column align-items-center px-1 mt-2'>
        <h5 className='card-title'>{name.length > 20 ? name.slice(0, 20) + '...' : name}</h5>
        <h5>$<span>32.8</span></h5>
        <button onClick={() => {addCart([name, picture, price])}} className='w-100 py-1 fw-bold'>Add To Cart <BsCart3 className='fs-5'/></button>
      </div>
    </div>
  );
};

export default Card;