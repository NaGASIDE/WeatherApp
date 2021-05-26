import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiMoreVertical } from 'react-icons/fi'
import './style.sass'

export const Header = () => {
  return (
    <div className='header' >
      <button className='header-button' >
        <AiOutlinePlus/>
      </button>
      <h3 className='header-title' >Los Angeles</h3>
      <button className='header-button' >
        <FiMoreVertical/>
      </button>
    </div>
  )
}