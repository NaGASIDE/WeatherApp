import { createPortal } from "react-dom";
import React from 'react';
import './style.sass'

export const Modal = ( {onClose, child}) => {
  return createPortal((
    <div className='modal' onClick={onClose} >
      <div>
        <p>Настройки</p>
        <p>О разработчике</p>
      </div>
    </div>
  ), document.getElementById(`portal`))
}