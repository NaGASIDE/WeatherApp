import React from 'react'
import styles from './App.sass'
import Header from './Header'
import {CityName} from './components/CityName/cityName'

export const App = () => {
  return (
   <div className='main' >
   <header>
      <Header />
      <CityName />
   </header>
   
      
   
   <footer><p>Page created by nagaside</p></footer>
   </div>
  )
}

