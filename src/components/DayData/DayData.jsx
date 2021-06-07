import React from 'react'
import { useSelector } from 'react-redux'
import './style.sass'

function unixTime(unix) {
  let date = new Date(unix * 1000)
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  return hours + ':' + minutes.substr(-2)
} 

export const DayData = () => {

  const data = useSelector(state => state.city)

  return (
    <div className='day-data' >
       <div className='sunset' >
         <p>Восход <br/> {data.length ? unixTime(data[1].city.sunrise) : `00` } </p>
        
         <p>Закат <br/> {data.length ? unixTime(data[1].city.sunset) : `00` } </p>
        
       </div>
       <div className='day-data-block' >
         <p className='day-data-block-title' >Ощущаемость</p>
         <p className='day-data-block-text' >{ data.length ? (data[0].main.feels_like - 275.15).toFixed() : `00` }<sup>&deg;</sup></p>
       </div>
       <div className='day-data-block' >
         <p className='day-data-block-title' >Влажность</p>
         <p className='day-data-block-text' >{data.length ? data[0].main.humidity  : `00`}%</p>
       </div  >
       <div className='day-data-block' >
         <p className='day-data-block-title' >Видимость</p>
         <p className='day-data-block-text' >{ data.length ? data[0].visibility / 1000  : `00` }  км</p>
       </div>
       <div className='day-data-block' >
         <p className='day-data-block-title' >Давление</p>
         <p className='day-data-block-text' >{ data.length ? data[0].main.pressure  : `00`}mbar</p>
       </div>
       <div className='day-data-block' >
         <p className='day-data-block-title' >Скорость ветра</p>
         <p className='day-data-block-text' >{ data.length ? data[0].wind.speed  : `00`} м/c</p>
       </div>
       <div className='day-data-block' >
         <p className='day-data-block-title' >Порыв ветра</p>
         <p className='day-data-block-text' >{ data.length ? data[0].wind.deg  : `00`} м/c</p>
       </div>
    </div>
  )
}