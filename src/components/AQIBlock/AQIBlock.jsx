import React from 'react'
import { GiThreeLeaves } from 'react-icons/gi'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import './style.sass'

export const AQIBlock = () => {
  return (
    
    <div className='aqi-block' >
      <div className='container' >
        <div>
          <p className='aqi-block-title' >Индекс качества воздуха</p>
          <p className='aqi-block-text' > <GiThreeLeaves />  21</p>
        </div>
        <Link className='aqi-block-more' to='/aqi' >
          <a className='aqi-block-more' >Полный прогноз ИКВ <IoIosArrowForward />  </a>
        </Link>
      </div>
    </div>
  )
}