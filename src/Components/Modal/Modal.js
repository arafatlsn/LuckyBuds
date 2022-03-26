import React from 'react';
import Modal from 'react-modal';
import './Modal.css'

const ShowModal = ({disModal, setDis, cart}) => {
  const ranNum = parseInt(Math.random() * 4);
  let cartFilt = cart.find(filt => filt === cart[ranNum])
  if(!cartFilt){
    cartFilt = []
  }
  return (
    <div>
      <Modal className='modal-div' isOpen = {disModal}>
        <div className='modal-header-div d-flex justify-content-between align-items-center text-white'>
          <h6 className='my-0 mx-2 fw-bold'>Your Lucky Item:</h6>
          <p onClick={() => setDis(false)} className='modal-crss-btn my-0 mx-2 fw-bold'>close</p>
        </div>
        <div className='cart-container-div d-flex d-lg-flex flex-lg-row align-items-center border w-100 bg-white'>
        <div className='cart-img-div my-1 mx-1'>
          <img src={cartFilt[1]} alt='airbud'/>
        </div>
        <div className='d-flex flex-column mt-lg-0 ms-lg-1'>
          <h6 className='m-0 text-center'>{cartFilt[0]}</h6>
          <h6 className='m-0'>$<span>{cartFilt[2]}</span></h6>
        </div>
      </div>
      </Modal>
    </div>
  );
};

export default ShowModal;