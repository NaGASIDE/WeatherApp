import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import './style.sass'

export const City = ( {city} ) => {

  let temp = (city.main.temp - 275.15).toFixed()

  return (
    <div className='city' >
      <p className='city-name' >{city.name}</p> 
       <p className='city-temp' >{temp}&deg;</p>
      <AiOutlineClose className='city-icon'  />
    </div>
  )
}