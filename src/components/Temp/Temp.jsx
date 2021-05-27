import React from 'react'
import { AQI } from './AQI/AQI'
import { IoIosArrowForward } from 'react-icons/io'
import { WiMoonAltFull } from 'react-icons/wi'
import { Link } from 'react-router-dom'
import './style.sass'

export const Temp = () => {
  return (
    <div className='temp' >
      <div className='temp-title-block' >
        <p className='temp-title' >29<sup>&deg;</sup></p>
      </div>
      <p className='temp-footer' >Ясно</p>
      <AQI />
      <Link to='/five-days' >
        <a className='temp-more' >Подробнее<IoIosArrowForward className='temp-icon' /></a>
      </Link>
    </div>
  )
}