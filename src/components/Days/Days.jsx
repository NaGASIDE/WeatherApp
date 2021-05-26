import React from 'react';
import { Day } from './Day/Day'
import './style.sass'

export const Days = () => {

  return (
    <div className='days' >
      <Day />
      <Day />
      <Day />
      <button className='days-button'>
        Прогноз на 5 дней
      </button>
    </div>
  )
}