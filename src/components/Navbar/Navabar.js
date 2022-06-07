import React from 'react'
import logo from '../../assets/images/logo.png'
import './nav.scss'

const Navabar = () => {
     return (
          <nav className='shadow-sm d-flex fixed-top bg-white'>
               <img src={logo} alt="airbnb logo"/>
          </nav>
     )
}

export default Navabar