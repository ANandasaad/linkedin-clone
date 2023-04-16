import React from 'react'

const Icon = ({icons,title}) => {
  return (
    <div className='flex flex-col items-center '>
    <li className='hover:text-gray-700 text-2xl text-gray-500 '>{icons}</li>
    <li className='max-mobile:text-[10px] hover:underline'>{title}</li>
</div>
  )
}

export default Icon