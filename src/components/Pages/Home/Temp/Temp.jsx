import React from 'react'
import { AQI } from './AQI/AQI';
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './style.sass'

export const Temp = () => {
  let temp = useSelector(state => state.city[0])
  
  return (
    <div className='temp' >
      <div className='temp-title-block' >
        <p className='temp-title' >{temp ? (temp.main.temp - 275.15).toFixed() : `00`}<sup>&deg;</sup></p>
      </div>
      <p className='temp-footer' >{ temp ? (temp.weather[0].main) : `Город не указан`}</p>
      <AQI />
      <Link to='/five-days' >
        <a className='temp-more' >Подробнее<IoIosArrowForward className='temp-icon' /></a>
      </Link>
    </div>
  )
}