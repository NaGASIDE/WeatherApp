import React from 'react'
import { AQI } from './AQI/AQI'
import { IoIosArrowForward } from 'react-icons/io'
import './style.sass'

export const Temp = () => {
  return (
    <div className='temp' >
      <div className='temp-title-block' >
        <p className='temp-title' >29</p>
      </div>
      <p className='temp-footer' >Ясно</p>
      <AQI />
      <a className='temp-more' >Подробнее<IoIosArrowForward className='temp-icon' /></a>
    </div>
  )
}