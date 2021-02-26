import React from 'react'
import styles from './Sun.sass'

export const Sun = ({pos}) => {
  function timeZone(n){
    let t = 0;
        ((new Date().getUTCHours() * 60 * 60 + n) / 60 / 60) > 24 ?
    t = ((new Date().getUTCHours() * 60 * 60 + n) / 60 / 60) - 24 :
    t = ((new Date().getUTCHours() * 60 * 60 + n) / 60 / 60)
  return t
  }

  const sunPos = timeZone(pos)
  console.log(sunPos)
  return (
    <div className="sun" >
    </div>
  )
}