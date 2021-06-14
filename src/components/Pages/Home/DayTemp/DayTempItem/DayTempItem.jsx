import React from 'react';
import { GiPlainCircle } from 'react-icons/gi'
import { BsCloudFill, BsFillCloudFill } from 'react-icons/bs'
import { FaCloudShowersHeavy, FaCloudSunRain, FaSnowflake, FaCloudSun } from 'react-icons/fa'
import { RiThunderstormsFill } from 'react-icons/ri'
import { RiMistFill } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import './style.sass'

function getClock(date) {
  return date.split(` `)[1].substring(0, date.split(` `)[1].length - 3)
 }

 function findIcon(iconId) {
  if (iconId === ``) {return icons[0]}
  let id = iconId.substring(0, iconId.length - 1)
  const icons = [<GiPlainCircle className='day-temp-item-icon' />,     <FaCloudSun className='day-temp-item-icon' />,          <BsCloudFill className='day-temp-item-icon' />, 
                 <BsFillCloudFill className='day-temp-item-icon' />,    <FaCloudShowersHeavy className='day-temp-item-icon' />, <FaCloudSunRain className='day-temp-item-icon' />, 
                 <RiThunderstormsFill className='day-temp-item-icon' />, <FaSnowflake className='day-temp-item-icon' />,          <RiMistFill className='day-temp-item-icon' />]
  const iconIds = [`01`,`02`,`03`,`04`,`09`,`10`,`11`,`13`,`50`]

  return icons[( iconIds ).indexOf(id)] 
}

export const DayTempItem = ({ num }) => {

  const data = useSelector(state => state.city)

  return (
    <div className='day-temp-item' >
      <p className='day-temp-item-title' >{ data.length ? getClock(data[1].list[num].dt_txt) : `00` }</p>
      <p className='day-temp' > { data.length ? ((data[1].list[num].main.temp - 275.15).toFixed()) : `00` } <sup>&deg;</sup></p>
      {data.length ? findIcon(data[1].list[num].weather[0].icon) : <GiPlainCircle className='day-temp-item-icon' />}
      <p className='day-temp-item-air' >{  data.length ? (data[1].list[num].wind.speed).toFixed() : `00` } м/c</p>
    </div>
  )
}