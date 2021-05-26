import React from 'react'
import { Time } from './components/Time/Time'
import { Header } from './components/Header/Header'
import { Temp } from './components/Temp/Temp'
import { Days } from './components/Days/Days'
import './App.sass'


export const App = () => {
  return (
    <div className='app' >
      <Time />
      <Header />
      <Temp />
      <Days />
    </div>
  )
}
