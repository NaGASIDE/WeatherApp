import axios  from 'axios'
import React, { useState, useEffect } from 'react'
import { AQI } from './AQI/AQI'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import './style.sass'

export const Temp = () => {

  const [ AppState, setAppState ] = useState(``)
 
  useEffect(() => {
    const id = `cf0328590b7fd3dec8b9bb899f788ffc`
    const city = `los angeles`
    const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=los angeles&appid=cf0328590b7fd3dec8b9bb899f788ffc`;
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState(allPersons);
    }).catch(error => console.log(error));
  }, [setAppState]);


  return (
    <div className='temp' >
      <div className='temp-title-block' >
        <p className='temp-title' >{`12`}<sup>&deg;</sup></p>
      </div>
      <p className='temp-footer' >Ясно</p>
      <AQI />
      <Link to='/five-days' >
        <a className='temp-more' >Подробнее<IoIosArrowForward className='temp-icon' /></a>
      </Link>
    </div>
  )
}