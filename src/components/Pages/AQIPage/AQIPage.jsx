import React from 'react';
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import './style.sass'

export const AQIPage = () => {

  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

  return (
    <animated.div className='add-city' style={props} >
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
    </animated.div>
  )
}