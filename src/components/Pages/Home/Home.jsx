import React from 'react';
import { Time } from '../../Time/Time'
import { Header } from '../../Header/Header'
import { Temp } from '../../Temp/Temp'
import { Days } from '../../Days/Days'
import { DayTemp } from '../../DayTemp/DayTemp'
import { DayData } from '../../DayData/DayData'
import { AQIBlock } from '../../AQIBlock/AQIBlock'
import { useDispatch } from 'react-redux'
import { cityActions } from '../../../store/City/action' 
import './style.sass'

export const Home = () => {
  return (
    <div className='home' >
      <Time />
      <Header />
      <Temp />
      <Days />
      <DayTemp />
      <DayData />
      <AQIBlock />
      <p className='footer' >Разработчик проекта <h3>nagaside</h3> </p> 
    </div>
  )
}