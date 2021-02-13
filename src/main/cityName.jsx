import React from 'react'
import {useState} from 'react'
import ShowTemp from './showTemp'

export const CityName = () => {

  const [state, setstate] = useState(``)
  const [temp, setTemp] = useState(``)

  return ( 
    <div className='cityName' >
        <input  onChange={(e) => {
          setstate(e.target.value)
        }}/>
        <button onClick={(e) => {
          fetch(`http://api.openweathermap.org/data/2.5/weather?q=${state}&appid=cf0328590b7fd3dec8b9bb899f788ffc`)
          .then((e) =>  e.json().then((r) => {
            if (r.main === undefined) {
              setTemp(`Город не найден.`)
            } else {
              setTemp(Math.floor(r.main.temp - 273,15))
            }

          }))
        }} >Setch</button>
        
        <ShowTemp temp={temp} />
    </div>
  ) 
}



