import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart'
import { BsFillQuestionDiamondFill, BsFillTrashFill } from "react-icons/bs";
import ShowModal from '../Modal/Modal'
import './Main.css'


let cartName = [];

const Main = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])
  const [disModal, setDis] = useState(false)
  const [rmvItem, setRmvItem] = useState([]);
  useEffect(() => {
    fetch('generated (1).json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, []);

  const addCart = product => {
    if(cartName.indexOf(product[0]) == -1 && cart.length < 4){
      cartName.push(product[0])
      const newCart = [...cart, product]
      setCart(newCart)
    }
    else{
      alert('you already slected this item in the cart, or you are reached maximum size in the cart')
    }
  }

  const removeFrmCart = rmvCart => {
    const filtCart = cart.filter(elCart => elCart[0] != rmvCart[0])
    setCart(filtCart)
    const filtCartName = cartName.filter(elName => elName != rmvCart[0]);
    cartName = [];
    cartName.push(filtCartName)
  }
  return (
    <div className='main-container'>
      <div className='card-container'>
        {
          products.map(product => <Card key={product.id} product = {product} addCart = {addCart} cart = {cart}></Card>)
        }
      </div>
      <div className='cart-container'>
        <h5 className='my-3'>Cart Preview</h5>
        <div className='cart-items-div'>
        {
          cart.map(cartItem => <Cart key={cartItem[0]} cartItem = {cartItem} removeFrmCart = {removeFrmCart}></Cart>)
        }
        </div>
        <div className='cart-lucky-div d-flex flex-column mt-3'>
          <button onClick={() => cart.length < 4 ? alert('please! choose minimum 4 items') : setDis(true)} className='lucky-button m-1 mx-lg-2 py-1'>Lucky One <BsFillQuestionDiamondFill/></button>
          <button onClick={() => {
            setCart([]);
            cartName = [];
            }} className='reset-button m-1 mx-lg-2 py-1'>Reset <BsFillTrashFill/></button>
        </div>
      </div>
      <ShowModal disModal = {disModal} setDis = {setDis} cart = {cart}></ShowModal>
    </div>
  );
};

export default Main;