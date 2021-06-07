import React from 'react'
import { DayTempItem } from './DayTempItem/DayTempItem'
import './style.sass'

export const DayTemp = () => {

  return (
    <div className='day-temp-block' >
      <DayTempItem num='0' />
      <DayTempItem num='1' />
      <DayTempItem num='2' />
      <DayTempItem num='3' />
      <DayTempItem num='4' />
      <DayTempItem num='5' />
      <DayTempItem num='6' />
      <DayTempItem num='7' />
    </div>
  )
}