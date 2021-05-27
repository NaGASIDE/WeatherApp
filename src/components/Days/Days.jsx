import React from 'react';
import { Day } from './Day/Day'
import { Link } from 'react-router-dom'
import './style.sass'

export const Days = () => {

  return (
    <div className='days' >
      <Day />
      <Day />
      <Day />
      <Link to='/five-days' >
        <button className='days-button'>
          Прогноз на 5 дней
        </button>
      </Link>
    </div>
  )
}