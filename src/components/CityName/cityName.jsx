import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { ShowTemp } from '../ShowTemp/ShowTemp'
import styles from './CityName.module.sass'

export const CityName = () => {
  const [input, setInput] = useState('')
  const [temp, setTemp] = useState('Write any city')

  const  onClickButton = async () => {
try {
  const {data} = !!input.trim() ? await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=cf0328590b7fd3dec8b9bb899f788ffc`) : {data:'Please write any city'}
  setTemp((Math.floor(data.main.temp - 273, 15)))
  
} catch (error) {
  setTemp('Write any city')
}}
  const onChangeInput = (e)=> setInput(e.target.value)
  
  return (
    <div className={styles.cityname} >
      <input className={styles.input} value={input} onChange={onChangeInput} />
      <button className={styles.button} onClick={onClickButton} >Search</button>

      <ShowTemp temp={temp} />
    </div>
  )
}



