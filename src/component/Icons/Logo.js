import React, { useState } from 'react'
import { AiFillCaretDown } from "react-icons/ai";

const Logo = () => {

  const [show, setShow]= useState(false);
 const handleShow=()=>{
  setShow(!show);
 }
  return (
    <div className='flex flex-col items-center '>
    <img className='hover:text-gray-700 text-2xl text-gray-500 rounded-full w-6 ' src='https://media.licdn.com/dms/image/C5603AQE8CDAxZcBnmw/profile-displayphoto-shrink_100_100/0/1603207860344?e=1687392000&v=beta&t=wsQLEbcKKT-pvM5q9x1pXBwpebrIuCul5cyHi7XXHU0'/>
    <div className='flex items-center'>
    <li className='max-mobile:text-[10px] hover:underline'onClick={handleShow} >Me </li>
    <span><AiFillCaretDown/></span>
   {show&& <p className='fixed top-20 border border-black px-3 py-3 bg-white hover:cursor-pointer'>sign out</p>}
    </div>
    


</div>
  )
}

export default Logo