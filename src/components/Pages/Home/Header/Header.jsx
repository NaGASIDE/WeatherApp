import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiMoreVertical } from 'react-icons/fi'
import { Modal } from '../../../../UIKit/Modal/Modal'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './style.sass'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
   const data = useSelector(state => state.city[1])

  const toggleModal = ()=>{
    setIsOpen(prev => !prev)
  }

  return (
    <div className='header' >
      <Modal isOpen={isOpen} onClose={toggleModal}>
      <div className='modal' >
        <div>
          <p>Настройки</p>
          <p>О разработчике</p>
        </div>
      </div>
      </Modal>
      <Link to="/add-city">
        <button className='header-button' >
          <AiOutlinePlus/>
        </button>
      </Link>
      <h3 className='header-title' >{ data ? data.city.name : `Город не указан`}</h3>
      <button className='header-button' onClick={toggleModal} >
        <FiMoreVertical/>
      </button>
    </div>
  )
}