import React from 'react'
import SideBar from './SiderBar/SideBar'
import Widget from './RightSide/Widget'
import Feed from './Feed/Feed'
const Main = () => {
  return (
    <div className='flex justify-around relative top-20 max-mobile:block bg-gray-100'>
 <SideBar/>
       <Feed/>
      <Widget/>
    </div>
  )
}

export default Main