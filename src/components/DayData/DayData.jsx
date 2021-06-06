import React from 'react'
import { useSelector } from 'react-redux'
import './style.sass'

export const DayData = () => {

  const data = useSelector(state => state.city[0].list[0])
  console.log(data)

  return (
    <div className='day-data' >
      {/* <SunSet /> */}
      <div className='sunset' >
        <p>Восход <br/> 05:03 </p>
        
        <p>Закат <br/> 21:35 </p>
        
      </div>
      <div className='day-data-block' >
        <p className='day-data-block-title' >Ощущаемость</p>
        <p className='day-data-block-text' >{(data.main.feels_like - 275.15).toFixed()}<sup>&deg;</sup></p>
      </div>
      <div className='day-data-block' >
        <p className='day-data-block-title' >Влажность</p>
        <p className='day-data-block-text' >{data.main.humidity}%</p>
      </div  >
      <div className='day-data-block' >
        <p className='day-data-block-title' >Видимость</p>
        <p className='day-data-block-text' >{data.visibility / 1000 }  км</p>
      </div>
      <div className='day-data-block' >
        <p className='day-data-block-title' >Давление</p>
        <p className='day-data-block-text' >{data.main.grnd_level}mbar</p>
      </div>
      <div className='day-data-block' >
        <p className='day-data-block-title' >Скорость ветра</p>
        <p className='day-data-block-text' >{data.wind.speed} м/c</p>
      </div>
      <div className='day-data-block' >
        <p className='day-data-block-title' >Порыв ветра</p>
        <p className='day-data-block-text' >{data.wind.gust} м/c</p>
      </div>
    </div>
  )
}