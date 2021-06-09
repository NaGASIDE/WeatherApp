import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useSpring, animated } from 'react-spring'
import { useDispatch } from 'react-redux'
import { cityActions }  from '../../../../store/City/action'
import './style.sass'

export const City = ( {city} ) => {

  let temp = (city.main.temp - 275.15).toFixed()
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
  const dispatch = useDispatch()

  return (
    <animated.div className='city' style={props} >
      <p className='city-name' >{city.name}</p> 
       <p className='city-temp' >{temp}&deg;</p>
      <AiOutlineClose className='city-icon' onClick={() => dispatch(cityActions.deleteCity(city.key))} />
    </animated.div>
  )
}