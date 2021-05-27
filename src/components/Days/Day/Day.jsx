import React from 'react';
import { GiPlainCircle } from 'react-icons/gi'
import './Style.sass'

export const Day = () => {
  return (
    <div className='day' >
      <GiPlainCircle className='day-icon' />
      <p className='day-text' > Today - Ясно </p> 
      <p className='day-temp' >35<sup>&deg;</sup> / 16<sup>&deg;</sup> </p>
    </div>
  )
}