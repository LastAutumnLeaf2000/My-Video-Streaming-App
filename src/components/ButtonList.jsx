import React from 'react'
// import Button from './Button'

const ButtonList = () => {
  const array = ["All","Gaming","Movies","Songs","Cricket","Football","Live","Singing","Dancing","Travel","Coding","Cooking","Vines","Vlogs"];

  return (
  <div className='flex'>
    {
      array.map((list,index)=><div key={index}><button className='bg-gray-200 px-4 py-2 ml-2 rounded-lg'>{list}</button></div>)
    }
    </div>
  )
}

export default ButtonList