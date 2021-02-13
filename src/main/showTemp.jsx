import React from 'react'



const ShowTemp = (props) => {
  const sum = (temp) => {
    console.log(temp)
    if (temp === undefined) {
      return `Город не найден.`
    } else {
      return temp
    }
  }
  
  return   (
    <div>
      <p>{sum(props.temp)}</p>
    </div>
  )
}

export default ShowTemp