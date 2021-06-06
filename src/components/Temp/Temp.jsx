import axios  from 'axios'
import React, { useState, useEffect } from 'react'
import { AQI } from './AQI/AQI'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './style.sass'

export const Temp = () => {
  let temp = useSelector(state => state.city[0].list[0].main.temp)
      temp = (temp - 273).toFixed()
  
  return (
    <div className='temp' >
      <div className='temp-title-block' >
        <p className='temp-title' >{temp}<sup>&deg;</sup></p>
      </div>
      <p className='temp-footer' >Ясно</p>
      <AQI />
      <Link to='/five-days' >
        <a className='temp-more' >Подробнее<IoIosArrowForward className='temp-icon' /></a>
      </Link>
    </div>
  )
}