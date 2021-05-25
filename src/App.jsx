import React from 'react'
import { Time } from './components/Time/Time'
import { Header } from './components/Header/Header'
import './App.sass'


export const App = () => {
  return (
    <div className='app' >
      <Time />
      <Header />
    </div>
  )
}
