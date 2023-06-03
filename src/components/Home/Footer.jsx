//import React from 'react';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
const Footer = () => {
  return (
    <>
      
      <div className="social">
      <h5>Redes sociales</h5>
      <a href="https://es-la.facebook.com/"rel="noreferrer" target="_blank"><BsFacebook className='fc'/></a> 
      <a href="https://www.instagram.com"rel="noreferrer" target="_blank"><BsInstagram className='in'/></a> 
      <a href="https://www.whattsapp.com"rel="noreferrer" target="_blank"><BsWhatsapp className='wh'/></a> 
      
      </div>
    </>
  )
}
export default Footer