import React from 'react'
import './ShowTemp.sass'

export const ShowTemp = ({temp}) => {

  const graduc = temp !== 'Write any city' ? `${temp}*C` : temp

  return   (
    <div className='dress'>
      <p className='pp'>{graduc}</p>  
    </div>
  )
}

