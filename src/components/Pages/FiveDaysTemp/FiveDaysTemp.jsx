import React from 'react'
import { FDay } from './FDay/FDay'
import { Time } from '../../Time/Time'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { useSpring, animated } from 'react-spring'
import './style.sass'

export const FiveDaysTemp = () => {

  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

  return (
    <animated.div className='five-days-temp' style={props} >
      <Time />
      <Link to='/' >
        <button className='add-city-button' >
          <BsArrowLeft />
        </button>
      </Link>
      <p className='add-city-title' >Прогноз на 5 дней</p>
      <FDay num={0} />
      <FDay num={7} />
      <FDay num={15} />
      <FDay num={23} />
      <FDay num={31} />
    </animated.div>
  )
}