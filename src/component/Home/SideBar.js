import React from 'react'
import SideBarTop from './SideBarTop'
import SideBarBottom from './SideBarBottom'

const SideBar = () => {
  return (
    <>
    <div className='mx-2 basis-1/5 sticky top-20'>
     
        <SideBarTop/>
        <SideBarBottom/>
       
    </div>
   
    </>

  )
}

export default SideBar