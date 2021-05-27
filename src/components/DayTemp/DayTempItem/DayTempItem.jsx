import React from 'react';
import { BsCircleFill } from 'react-icons/bs'
import './style.sass'

export const DayTempItem = () => {
  return (
    <div className='day-temp-item' >
      <p className='day-temp-item-title' >Сейчас</p>
      <p className='day-temp' >32<sup>&deg;</sup></p>
      <BsCircleFill className='day-temp-item-icon' />
      <p className='day-temp-item-air' >12.0 км/ч</p>
    </div>
  )
}