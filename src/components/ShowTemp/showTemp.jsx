import React from 'react'
import styles from './ShowTemp.sass'

export const ShowTemp = (props) => {
  const sum = (temp) => {
    console.log(temp)
    if (temp === undefined) {
      return `Город не найден.`
    } else {
      return temp
    }
  }
  
  return   (
    <div className='dress' >
      <p className='pp' > {sum(props.temp)}°С</p>
    </div>
  )
}

