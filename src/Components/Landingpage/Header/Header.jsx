import React from 'react'
import './Header.css'
import Svg from '../../../Images/Svg.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-texts'>
        <div><span className='b1'>Learn </span></div>
        <div><span className='b2'>New Concepts </span></div>
        <div><span className='b3'>For Each Question</span></div>
        <div><span className='b4'>We help you prepare for quizes.</span></div>
        <div className='rubbish'>        
         <Link to="/Home">
              <button className='dreg'>Start</button>
         </Link>    
        </div>
      </div>
      <img src={Svg} alt="" className='svg'/>
    </div>
  )
}

export default Header

