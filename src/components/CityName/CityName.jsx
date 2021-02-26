import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { ShowTemp } from '../ShowTemp/ShowTemp'
import styles from './CityName.module.sass'
import {Sun} from '../Sun/Sun'

export const CityName = () => {
  const [input, setInput] = useState('')
  const [temp, setTemp] = useState('Write any city')
  const [pos, setPos] = useState('')

  const  onClickButton = async () => {
try {
  const {data} = !!input.trim() ? await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=cf0328590b7fd3dec8b9bb899f788ffc`) : {data:'please write city'}
  setTemp((Math.floor(data.main.temp - 273, 15)))
  setPos(data.timezone)
  
} catch (error) {
  setTemp('Write any city')
}}
  const onChangeInput = (e)=> setInput(e.target.value)
  
  return (
    <div className={styles.cityname} >
      <div>
        <input className={styles.input} value={input} onChange={onChangeInput} />
        <button className={styles.button} onClick={onClickButton} >Search</button>
      </div>
      <ShowTemp temp={temp} />
      <Sun pos={pos} />
    </div>
  )
}



