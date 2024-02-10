import React from 'react'
//@ts-ignore
import Perfil from '../../Assets/images/FotoPerfil.png'
//@ts-ignore
import X from '../../Assets/svgs/x.svg'
//@ts-ignore
import Facebook from '../../Assets/svgs/facebook.svg'
//@ts-ignore
import Tiktok from '../../Assets/svgs/tiktok.svg'
import './styles.scss'

export const Inicio = () => {
  return (
    <div className='inicio-container'>

      <div className='left-container'>
        <p className='left-container__title'>Hola soy Raúl<br />Desarrollador <span className='text-primary-color'>Frontend</span></p>
        <p className='left-container__info'>
          Soy un desarrollador frontend con 5 años de experiencia en el desarrollo web
          centrándome especialmente en el ecositema de ReactJS. Estoy compormetido
          en crear interfaces de usuario dinámicas y atractivas.
        </p>
        <div className='left-container__sociales'>
          <div className="left-container__sociales__social"><img src={Facebook} alt="" /></div>
          <div className="left-container__sociales__social"><img src={X} alt="" /></div>
          <div className="left-container__sociales__social"><img src={Tiktok} alt="" /></div>
          {/* <div className="left-container__sociales__social">IN</div> */}
        </div>
      </div>

      <div className='rigth-container'>
        <div className='photo-container' />
        <img src={Perfil} alt="" className='photo' />

      </div>
    </div>
  )
}
export default Inicio