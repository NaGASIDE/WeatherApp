import React from 'react'
import { BsCircleFill } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa'
import './style.sass'

export const FDay = () => {
  return (
    <div className='f-day' >
      <p className='f-day-title' >27<br/>05</p>
      <div className='f-day-morning' >
        <BsCircleFill className='f-day-morning-icon' />
        <p>30</p>
      </div>
      <div className='f-day-night' >
        <FaMoon className='f-day-night-icon' />
        <p>10</p>
      </div>
      <p className='f-day-wind' >20.4 <br/> км/ч</p>
    </div>
  )
}