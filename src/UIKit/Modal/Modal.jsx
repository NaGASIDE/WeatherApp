import { createPortal } from "react-dom";
import React from 'react';
import './style.sass'

export const Modal = ( {onClose,isOpen,children}) => {
  return isOpen && createPortal((
    <div className='modal' onClick={onClose} >
      {children}
    </div>
  ), document.getElementById(`portal`))
}