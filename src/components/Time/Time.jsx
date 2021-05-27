import React from 'react';
import { timenow } from './timenow'
import './style.sass'

export const Time = () => {
  let minute;
  if ((new Date).getMinutes() < 10) {minute = `0${(new Date).getMinutes()}`}
     else {minute = `${(new Date).getMinutes()}`}

  return (
    <div className='time' >
    {
     `${(new Date).getHours()}:${minute}`
    }
    </div>
  )
}