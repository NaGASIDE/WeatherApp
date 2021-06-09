import React from 'react';
import { Time } from '../../Time/Time'
import { Header } from '../../Header/Header'
import { Temp } from '../../Temp/Temp'
import { Days } from '../../Days/Days'
import { DayTemp } from '../../DayTemp/DayTemp'
import { DayData } from '../../DayData/DayData'
import { AQIBlock } from '../../AQIBlock/AQIBlock'
import { useSpring, animated } from 'react-spring'
import './style.sass'

export const Home = () => {

  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

  return (
    <animated.div className='home' style={props} >
      <Time />
      <Header />
      <Temp />
      <Days />
      <DayTemp />
      <DayData />
      <AQIBlock />
      <p className='footer' >Разработчик проекта <h3>nagaside</h3> </p> 
    </animated.div>
  )
}