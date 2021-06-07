import React from 'react';
import { GiPlainCircle } from 'react-icons/gi'
import { BsCloudFill, BsFillCloudFill } from 'react-icons/bs'
import { FaCloudShowersHeavy, FaCloudSunRain, FaSnowflake, FaCloudSun } from 'react-icons/fa'
import { RiThunderstormsFill } from 'react-icons/ri'
import { RiMistFill } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import './style.sass'

function findIcon(iconId) {
  if (iconId === ``) {return icons[0]}
  let id = iconId.substring(0, iconId.length - 1)
  const icons = [<GiPlainCircle className='day-icon' />,            <FaCloudSun className='day-icon-grey' />,           <BsCloudFill className='day-icon-grey' />, 
                 <BsFillCloudFill className='day-icon-grey' />,     <FaCloudShowersHeavy className='day-icon-grey' />,  <FaCloudSunRain className='day-icon-grey' />, 
                 <RiThunderstormsFill className='day-icon-grey' />, <FaSnowflake className='day-icon-blue' />,          <RiMistFill className='day-icon-grey' />]
  const iconIds = [`01`,`02`,`03`,`04`,`09`,`10`,`11`,`13`,`50`]

  return icons[( iconIds ).indexOf(id)] 
}

export const Day = ({ data } ) => {

  const day = data == 'Today' ? 0 : data == 'Tomorrow' ? 7 : 14
  const night = data == 'Today' ? 3 : data == 'Tomorrow' ? 11 : 18
  const temp = useSelector(state => state.city[1])

  return (
    <div className='day' >
    {temp ? findIcon( temp.list[day].weather[0].icon) : <GiPlainCircle className='day-icon' />}
      <p className='day-text' >{data}</p> 
      <p className='day-temp' >{ temp ? (temp.list[day].main.temp - 275.15).toFixed() : `00`}<sup>&deg;</sup> / { temp ? (temp.list[night].main.temp - 275.15).toFixed() : `00`}<sup>&deg;</sup> </p> 
    </div>
  )
}