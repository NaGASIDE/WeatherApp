import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import './style.sass'

export const City = ( {city} ) => {

  let temp = city.list[0].main.temp - 273.15

  return (
    <div className='city' >
      <p className='city-name' >{city.city.name}</p> 
       <p className='city-temp' >{temp.toFixed(1)}</p>
      <AiOutlineClose className='city-icon'  />
    </div>
  )
}