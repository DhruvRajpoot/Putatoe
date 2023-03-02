import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import {AiFillHome} from 'react-icons/ai'
import {BsPeopleFill} from 'react-icons/bs'
import {CgNotes} from 'react-icons/cg'
import { BsChatText } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footerwrapper d-sm-none d-flex justify-content-between'>
      <div className='text-center'>
        <p className='footericon'><AiFillHome/></p>
        <p className='footertext'>Home</p>
      </div>
      <div className='text-center'>
        <p className='footericon'><BsPeopleFill/></p>
        <p className='footertext'>Profile</p>
      </div>
      <div className='footerimg'>
        <p className='footericon'><img src={logo} alt="" width={35}/></p>
      </div>
      <div className='text-center'>
        <p className='footericon'><CgNotes/></p>
        <p className='footertext'>Follow List</p>
      </div>
      <div className='text-center'>
        <p className='footericon'><BsChatText/></p>
        <p className='footertext'>Chat</p>
      </div>
      <div className="fixedbtnicon">
        <img src={logo} alt="" width={20}/>
      </div>
    </div>
  )
}

export default Footer
