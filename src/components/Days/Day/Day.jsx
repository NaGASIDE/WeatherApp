import React from 'react';
import { GiPlainCircle } from 'react-icons/gi'
import { useSelector } from 'react-redux'
import './style.sass'

export const Day = ({ data } ) => {

  const day = data == 'Today' ? 0 : data == 'Tomorrow' ? 7 : 14
  const night = data == 'Today' ? 3 : data == 'Tomorrow' ? 11 : 18

  const temp = useSelector(state => state.city[0].list[day].main.temp)
  const tempNight = useSelector(state => state.city[0].list[night].main.temp)

  return (
    <div className='day' >
      <GiPlainCircle className='day-icon' />
      <p className='day-text' >{data}</p> 
      <p className='day-temp' >{(temp - 273.15).toFixed(0)}<sup>&deg;</sup> / {(tempNight - 273.15).toFixed(0)}<sup>&deg;</sup> </p>
    </div>
  )
}