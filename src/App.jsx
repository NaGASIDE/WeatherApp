import React from 'react'
import './App.sass'
import {CityName} from './components/CityName/CityName'
import {Sun} from "./components/Sun/Sun"

export const App = () => {
  return (
   <div className='main'>
     <header className='header' >Weather App</header>
      <CityName />
      <div className="img" ></div>
   </div>
  )
}

