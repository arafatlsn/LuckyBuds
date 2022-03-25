import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart'
import { BsFillQuestionDiamondFill, BsFillTrashFill } from "react-icons/bs";
import ShowModal from '../Modal/Modal'
import './Main.css'

const Main = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])
  const [disModal, setDis] = useState(false)
  useEffect(() => {
    fetch('generated (1).json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])
  const addCart = product => {
    const newCart = [...cart, product]
    if(cart.length <= 3){
      setCart(newCart)
    }
    else{
      // alert('you are reached maximum item selected')
    }
  }

  console.log(disModal)
  return (
    <div className='main-container'>
      <div className='card-container'>
        {
          products.map(product => <Card key={product.id} product = {product} addCart = {addCart} cart = {cart}></Card>)
        }
      </div>
      <div className='cart-container'>
        <h5 className='my-3'>Cart Preview</h5>
        {
          cart.map(cartItem => <Cart key={cartItem[0]} cartItem = {cartItem}></Cart>)
        }
        <div className='cart-lucky-div d-flex flex-column mt-3'>
          <button onClick={() => setDis(true)} className='lucky-button m-1 mx-lg-2 py-1'>Lucky One <BsFillQuestionDiamondFill/></button>
          <button onClick={() => setCart([])} className='reset-button m-1 mx-lg-2 py-1'>Reset <BsFillTrashFill/></button>
        </div>
      </div>
      <ShowModal disModal = {disModal} setDis = {setDis} cart = {cart}></ShowModal>
    </div>
  );
};

export default Main;