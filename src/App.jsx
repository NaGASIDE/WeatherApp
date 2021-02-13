import React from 'react'
import styles from './App.module.scss'
import Header from './Header'
import {CityName} from './main/cityName'

export const App = () => {
  return (
   <>
   <header>
      <Header />
      <CityName />
   </header>

   <main></main>
   <footer><p>Page created by nagaside</p></footer>
   </>
  )
}

