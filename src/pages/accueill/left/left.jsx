import React from 'react'
import"./left.css"
import { Userinfo } from './UserInfo/Userinfo';
import Formtraje from './chatList/Formtraje';

function Left() {
  return (
    <div className='List'> 
        <Userinfo/>
        <Formtraje/>
    </div>
  )
}

export default Left;