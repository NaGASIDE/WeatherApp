import React from 'react';
import { useSelector } from 'react-redux'
import { timenow } from './timenow'
import './style.sass'

export const Time = () => {
  const state = useSelector(state => state)
  let minute;
  if ((new Date).getMinutes() < 10) {minute = `0${(new Date).getMinutes()}`}
     else {minute = `${(new Date).getMinutes()}`}
     console.log(state)

  return (
    <div className='time' >
    {
     `${(new Date).getHours()}:${minute}`
    }
    </div>
  )
}