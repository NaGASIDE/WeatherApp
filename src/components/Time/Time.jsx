import React from 'react';
import { timenow } from './timenow'
import './style.sass'

export const Time = () => {

  return (
    <div className='time' >
    {
     `${(new Date).getHours()}:${(new Date).getMinutes()}`
    }
    </div>
  )
}