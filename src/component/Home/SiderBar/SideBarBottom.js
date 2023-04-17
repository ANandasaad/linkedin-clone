import React, { useState } from 'react'

const Recent=({topic})=>{

  return (
    <>
    
    <h2 className='px-3 py-2'><span>#</span>{topic}</h2>
    </>
  )


}

const SideBarBottom = () => {
    const [show,setShow]=useState(false);

  return (
    <div className='rounded-lg border border-gray-200  h-fit bg-white my-2 ' >
        <p className='px-2 py-1' >Recent</p>
        <Recent topic='ios'/>
        <Recent topic='Gaming'/>
        <Recent topic='JavaScript'/>
        <Recent topic='Computer Science'/>
        <Recent topic='Data Science'/>
        <Recent topic='Fronent End'/>
      {show ?<button className='px-1 mx-20 py-2 text-[15px]' onClick={()=>(setShow(!show))}>Hide All</button> :(<button className='px-1 mx-20 py-2 text-[15px]'onClick={()=>(setShow(!show))}>Show All</button> )}
       {show&&<>
       <Recent topic='Full Stack Devloper'/>
        <Recent topic='Mern Developer'/>
        <Recent topic='Back-end developer'/>
        <Recent topic='Analytics'/>
        <Recent topic='Analytics'/>
        <Recent topic='Analytics'/>
        <Recent topic='Analytics'/>
         <Recent topic='Analytics'/>
         <Recent topic='Analytics'/>
          <Recent topic='Analytics'/>
           <Recent topic='Analytics'/>
            <Recent topic='Analytics'/>
             <Recent topic='Analytics'/>
             <Recent topic='Analytics'/>

       </>}
      
        
    </div>
  )
}

export default SideBarBottom