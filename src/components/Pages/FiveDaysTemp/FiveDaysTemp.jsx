import React from 'react'
import { FDay } from './FDay/FDay'
import { Time } from '../../Time/Time'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import './style.sass'

export const FiveDaysTemp = () => {
  return (
    <div className='five-days-temp' >
      <Time />
      <Link to='/' >
        <button className='add-city-button' >
          <BsArrowLeft />
        </button>
      </Link>
      <p className='add-city-title' >Прогноз на 5 дней</p>
      <FDay />
      <FDay />
      <FDay />
      <FDay />
      <FDay />
    </div>
  )
}