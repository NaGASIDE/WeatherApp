import React from 'react'
import { BsCircleFill } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import './style.sass'

function getDate(date) {
  return date.split(` `)[0].split(`-`)
}

export const FDay = ({ num }) => {

  const data = useSelector(state => state.city)
  const date = data.length ? data[1].list[num].dt_txt : `00`
  const temp = data.length ? (data[1].list[num].main.temp - 275.15).toFixed() : `00`
  const tempNight = data.length ? (data[1].list[num + 5].main.temp - 275.15).toFixed() : `00`
  const windSpeed = data.length ? (data[1].list[num + 5].wind.speed).toFixed(1) : `00`

  return (
    <div className='f-day' >
      <p className='f-day-title' >{getDate(date)[1]} <br/> {getDate(date)[2]}</p>
      <div className='f-day-morning' >
        <BsCircleFill className='f-day-morning-icon' />
        <p>{ temp }</p>
      </div>
      <div className='f-day-night' >
        <FaMoon className='f-day-night-icon' />
        <p>{ tempNight }</p>
      </div>
      <p className='f-day-wind' >{ windSpeed } <br/> м/c</p>
    </div>
  )
}
