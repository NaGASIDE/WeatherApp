import React from 'react'
import './style.sass'

export const DayData = () => {
  return (
    <div className='day-data' >
      {/* <SunSet /> */}
      <div className='sunset' >
        <p>Восход</p>
        <p>Закат</p>
      </div>
      <div className='day-data-block' >
        <p className='day-data-block-title' >Ощущаемость</p>
        <p className='day-data-block-text' >31.2</p>
      </div>
      <div className='day-data-block' >
        <p className='day-data-block-title' >Влажность</p>
        <p className='day-data-block-text' >24%</p>
      </div  >
      <div className='day-data-block' >
        <p className='day-data-block-title' >Вероятность дождя</p>
        <p className='day-data-block-text' >25%</p>
      </div>
      <div className='day-data-block' >
        <p className='day-data-block-title' >Давление</p>
        <p className='day-data-block-text' >1008mbar</p>
      </div>
      <div className='day-data-block' >
        <p className='day-data-block-title' >Скорость ветра</p>
        <p className='day-data-block-text' >9.3 км/ч</p>
      </div>
      <div className='day-data-block' >
        <p className='day-data-block-title' >УФ-индекс</p>
        <p className='day-data-block-text' >3</p>
      </div>
    </div>
  )
}