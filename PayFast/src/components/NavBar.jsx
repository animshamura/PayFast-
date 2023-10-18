import {useState} from 'react'
import {logo} from '../assets'


const NavBar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
    <img src={logo}/>
    </nav> 
  )
}

export default NavBar
