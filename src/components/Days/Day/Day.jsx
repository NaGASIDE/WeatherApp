import React from 'react';
import { GiPlainCircle } from 'react-icons/gi'
import './Style.sass'

export const Day = () => {
  return (
    <div className='day' >
      <GiPlainCircle className='day-icon' />
      <p className='day-text' > Today - Ясно </p> 
      <p className='day-temp' >35 / 16 </p>
    </div>
  )
}