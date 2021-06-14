import React from 'react'
import { GiThreeLeaves } from 'react-icons/gi'
import './style.sass'

export const AQI = () => {
  return (
    <span className='air-quality-index' > 
      <p> <GiThreeLeaves /> ИКВ 21 </p>
    </span>
  )
}