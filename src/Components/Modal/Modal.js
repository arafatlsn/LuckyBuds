import React from 'react';
import Modal from 'react-modal';
import './Modal.css'

const ShowModal = ({disModal, setDis, cart}) => {
  const ranNum = parseInt(Math.random() * 4);
  let cartFilt = cart.find(filt => filt === cart[ranNum])
  if(!cartFilt){
    cartFilt = []
  }
  console.log(cartFilt[0])
  return (
    <div>
      <Modal className='modal-div border' isOpen = {disModal}>
        <div className='d-flex justify-content-between text-success px-3 py-2'>
          <h2 className='m-0'>Your Lucky Item:</h2>
          <p onClick={() => setDis(false)} className='cross-button m-0'>Close</p>
        </div>
      </Modal>
    </div>
  );
};

export default ShowModal;