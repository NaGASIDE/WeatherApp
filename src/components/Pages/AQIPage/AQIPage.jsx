import React from 'react';
import { Time } from '../../Time/Time'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './style.sass'

export const AQIPage = () => {
  return (
    <div className='add-city' >
      <Time />
        <Link to='/' >
          <button className='add-city-button' >
            <BsArrowLeft />
          </button>
        </Link>
        <p className='add-city-title' >Индекс качества воздузха</p>
        <div className='aqi-page' >
          <p> <p>21</p> Хороший</p>
          <p>Air quality is good. A perfect day for a walk!</p>
          <hr/>
          <a>Подробнее  о качестве воздуха </a>
        </div>
        <p className='footer' >Разработчик проекта <h3>nagaside</h3> </p> 
    </div>
  )
}