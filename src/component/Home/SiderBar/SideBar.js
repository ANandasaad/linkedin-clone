import React from 'react'
import SideBarTop from './SideBarTop'
import SideBarBottom from './SideBarBottom'

const SideBar = () => {
  return (
    <>
    <div className='mx-2 basis-1/6 max-mobile:hidden'>
     
        <SideBarTop/>
        <SideBarBottom/>
       
    </div>
   
    </>

  )
}

export default SideBar