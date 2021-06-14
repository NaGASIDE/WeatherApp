import React, { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs'
import { City } from './City/City'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cityActions } from '../../../store/City/action'
import { v1 as uuid } from 'uuid';
import { useSelector } from 'react-redux'
import { useSpring, animated } from 'react-spring'
import './style.sass'

export const AddCity = () => {

  const [city, setCity] = useState(``)
  const dispatch = useDispatch()
  const cities = useSelector(state => state.city)
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })


  return (
    <animated.div className='add-city' style={props} >
        <Link to='/' >
          <button className='add-city-button' >
            <BsArrowLeft />
          </button>
        </Link>
        <p className='add-city-title' >Управление городами</p>
        <input placeholder={`Введите местоположение`}
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key == `Enter` && city.length > 3) {
            dispatch(cityActions.deleteCity(city.id))
            dispatch(
              cityActions.addCity({
                id: uuid(),
                city: city
              })
            );
            setCity('');
          }
        }}
        />
       {cities.map((city, i, arr) => {
          if (arr[i % 2 == 0 ? i : null]) 
          {
            return <City key={ (arr[i % 2 == 0 ? i : null]).id} 
                         city={(arr[i % 2 == 0 ? i : null])} />
        }
      })}
    </animated.div>
  )
}