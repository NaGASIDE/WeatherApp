import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiMoreVertical } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Modal } from '../Pages/Home/Modal/Modal'
import './style.sass'

export const Header = () => {

  const [isOpen, SetIsOpen] = useState(false)
  console.log(isOpen)

  return (
    <div className='header' >
      {isOpen ? <Modal onClose={() => SetIsOpen(!isOpen) } />: ``}
      <Link to="/add-city">
        <button className='header-button' >
          <AiOutlinePlus/>
        </button>
      </Link>
      <h3 className='header-title' >Los Angeles</h3>
      <button className='header-button' onClick={() => SetIsOpen(!isOpen)} >
        <FiMoreVertical/>
      </button>
    </div>
  )
}