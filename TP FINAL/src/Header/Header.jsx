import logo from '../assets/logo.png'
import React from 'react'
import './Header.css'



function Header (){
return (

<> 
<div className="header">
<h1>BUSCADOR DE PERSONAJES</h1>

<img className='img-header' src={logo} alt="" />

</div>


</>



)
}

export default Header 