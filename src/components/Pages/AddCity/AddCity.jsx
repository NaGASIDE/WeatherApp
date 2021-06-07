import React, { useState } from 'react';
import { Time } from '../../Time/Time'
import { BsArrowLeft } from 'react-icons/bs'
import { City } from './City/City'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cityActions } from '../../../store/City/action'
import { v1 as uuid } from 'uuid';
import { useSelector } from 'react-redux'
import './style.sass'

export const AddCity = () => {

  const [city, setCity] = useState(``)
  const dispatch = useDispatch()
  const cities = useSelector(state => state.city)


  return (
    <div className='add-city' >
      <Time />
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
    </div>
  )
}