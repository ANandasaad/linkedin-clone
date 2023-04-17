import React, { useState } from 'react'
import { AiFillCaretDown, AiFillHome } from "react-icons/ai";
import { RiGroupFill } from "react-icons/ri";
import { BsFillBagDashFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { MdNotificationsActive } from "react-icons/md";
import { GrApps } from "react-icons/gr";


import Icon from './Icons/Icon';
import Logo from './Icons/Logo';




const Header = () => {
  
  return (
    <div className='flex justify-around   px-1 py-1 border border-gray-600 w-full bg-white  fixed '>
      
       <div className='flex space-x-1 my-2 mx-1 '>
        <img className='w-12 h-12 px-1 py-1 max-mobile:w-14' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAYFBMVEUAd7f///8AdbYAcLQAZrDy+Pvj8PdSkcM+h7/F2emNttcAabH6/P0AcrUzhb7Z5fAAbLKGr9Ovy+JnncobgLvR4e57qdDq8/hilsa50eVYlsZvo80de7mbv9s1gby81ujM2enMAAADd0lEQVRoge2bbZeqIBDHecgMdRI1tDWt7/8tr9Wto+sgxl3g3LP+X+wbXH4NwjAzCKEPZaKIT8SHTnEhsieUPP6WHQfGvLAZA96Vb3ZUST/cN19W0ZMdxdwr+S4eRw925R89wKs7u5QB0ITIkpKs8/uuX2JdRkSIEb+LC1JAIDYUJA4z5MOgx+QUjO3Hj36swfd5c7QTgezOdVLUZyI9z0UGlWiee03z1XKftvODoiOJzp/psqZTRa0v/5MmdKaLHzhc5miatT6GfXDxCJvufSw2XmJoSnv3Oy274mgagXPDea9h09r5GwelY9+cD/q10bGbnWM0O6Cz/CHXdrNYi6au3csS27nd10iHjlLXbJbr2MI1m8gvHTtxvp2A9oUf3Tt0nXO5OR9yreHRwUfgJNGNLPGTMO6QUfeVqzI+m+u9+w30JZ5MPExz8Rkl82P5pjd95zdLZrK79EIpkVQkQFkCuEzTlIdIyH6n2EQfNQJI/pTkFuHlPe0eC8Z9wLdGNlqAjMO1rcubULlSt7Jor/Dh8uSFyidSo3SMt2LamJevIhnwQ59P471IJd0ndImE6MULztp5Y/6As7TFt8DbMV1LZwz5/+ZlW4r1f08b+FEb2dOSrXzxaLj43kJ3e6R1CGnSWh9cDz99ZbXYio29p7GydQm8DXtXLKPvCfwauAW7QCagtocfZvfaJG6k/Yp8zoK9Tr151J2xqbly645dGg13x86uJsPdsc1plUN2bnKtDtnUdEbhkl0YBv0f2Nk+H6KGBUcjDDGvNTvqYzZEtrI7C90jjSHqtWWrk/zbM6StpnJicuqW7HJ8lAydBn5Znul2bDU9xYYD/phhhduxvx+q4lm8KZe2Ys8q3KxDnzMUq2zYiKdGg0rTJm7DRswB5NRlWGQ/bzdSW8ero82PzzVs2TLAgmbD6YMFe49Zs8OWuOEjAws2Ont3WGU2Wz53tmCjqzbFvHq2HLPZ5UT/A3u5IryxN/bG3tgbe2Nv7I29sTf2xt7YG/sXsrGynCc2SZFihXr1jn5r1WIdcqzQhFZHRoJqBm/idyHpNDe8RIukjMwNjyrTyQE/FslE9ehDbEbqaWNy1hxwM7h8e7I4rDgiAz4RLDXqj9ZnT/r7OmiFQt6zCHm/JOS9mpD3iULeowp5fyzovbmg9wVD3pOkIe+H0kD3Yv8A1s5CNIt3MoYAAAAASUVORK5CYII=' alt='logo'/>
       
        <input  className='h-10 w-96 px-1 py-1 mx-1 my-1 max-mobile:w-32 border border-gray-300 bg-blue-50' placeholder='search'  />

      
        </div> 
        <div className='max-mobile:fixed max-mobile:bottom-0 max-mobile:left-0 '>
            <ul className='flex space-x-5 px-2 py-2 '>
                <Icon icons={<AiFillHome/>} title='Home'/>
                <Icon icons={<RiGroupFill/>} title='My Network'/>
                <Icon  icons={<BsFillBagDashFill/>} title='Jobs'/>
                <Icon  icons={<RiMessage2Fill/>} title='Messaging'/>
                <Icon icons={<MdNotificationsActive/>} title='Notification'/>
                <Logo/> 
                <div className='flex flex-col items-center  border-l-[1px] px-2 max-mobile:hidden'>
                <li className='hover:text-gray-700 text-2xl text-gray-500 '><GrApps/></li>
                <div className='flex items-center'>
               <li className='max-mobile:text-[10px] hover:underline'>For Bussiness </li>
               <span><AiFillCaretDown/></span>
               </div>
              </div>   
            </ul>
         
        </div>
    

       

    </div>
  )
}

export default Header