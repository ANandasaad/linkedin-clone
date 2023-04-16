import React from 'react'
import Icon from '../Icons/Icon'
import { BsFillBagDashFill } from 'react-icons/bs'
import { RiGroupFill } from 'react-icons/ri'
import { AiOutlineCompass } from "react-icons/ai";


import { CiYoutube } from "react-icons/ci";

const LoginHeader = () => {
  return (
    <div className='flex justify-around'>
         <img  className="w-40 max-mobile:w-32 max-mobile:px-3 max-mobile:py-2" src='https://1000logos.net/wp-content/uploads/2023/01/LinkedIn-logo-500x281.png' alt='logo'/>
         <div className='flex items-center'>
            <ul className='flex space-x-7 px-2 py-2 border-r-[1px] max-mobile:hidden'>
            <Icon icons={<AiOutlineCompass/>} title='Discover'/>
                <Icon icons={<RiGroupFill/>} title='People'/>
                <Icon icons={<BsFillBagDashFill/>} title='Jobs'/>
                <Icon icons={<CiYoutube/>} title='Learning'/>
            </ul>
            <div className='space-x-4 mx-4'>
                <button className='px-4 py-4   max-mobile:text-[14px] max-mobile:px-3 max-mobile:py-2 '>Join Now</button>
                <button className='px-9 py-4 border border-blue-600 rounded-full max-mobile:text-[14px] text-blue-800 font-bold max-mobile:px-3 max-mobile:py-2'>Sign in</button>
            </div>
        </div>
    </div>
  )
}

export default LoginHeader