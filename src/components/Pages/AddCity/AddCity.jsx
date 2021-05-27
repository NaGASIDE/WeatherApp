import React from 'react';
import { Time } from '../../Time/Time'
import { BsArrowLeft } from 'react-icons/bs'
import { City } from './City/City'
import { Link } from 'react-router-dom'
import './style.sass'

export const AddCity = () => {
  return (
    <div className='add-city' >
      <Time />
        <Link to='/' >
          <button className='add-city-button' >
            <BsArrowLeft />
          </button>
        </Link>
        <p className='add-city-title' >Управление городами</p>
        <input placeholder={`Введите местоположение`} />
        <City />
        <City />
        <City />
        <City />
        <City />
    </div>
  )
}