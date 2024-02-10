import React from 'react'
//@ts-ignore
import Iniciales from '../../Assets/images/logoIniciales.png'
//@ts-ignore
import Logo from '../../Assets/images/logoRelleno.png'
//@ts-ignore
import user from '../../Assets/images/userLogin.png'

import './styles.scss'

export const Navbar = () => {
  return (
    <div className='nav-bar-container'>
      <div className='logo'>
        <img className='logo__logo2' src={Logo} alt="" />
        <img className='logo__logo2' src={Iniciales} alt="" />
      </div>
      <div className='nav-area'>
        <ul className="nav-links">
          <li><a href="/">INICIO</a></li>
          <li><a href="/about">ACERCA DE</a></li>
          <li><a href="#projects">PORTAFOLIO</a></li>
          <li><a href="#projects">FORMACIÓN</a></li>
          <li><a href="#projects">CURRICULUM</a></li>
          <li><a href="#projects">BLOG</a></li>
          <li><a href="#projects">CONTACTO</a></li>

        </ul>
      </div>
      <div className='controles'>
        <img className='controles__login' src={user} alt="" />
      </div>
      <div className="burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  )
}

export default Navbar