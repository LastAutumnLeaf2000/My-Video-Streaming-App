import React from 'react'
import { useDispatch } from 'react-redux';
import { addText } from "../utils/searchTextSlice";

const ButtonList = () => {
  const dispatch = useDispatch()
  const array = ["All","Apple","Gaming","Movies","Songs","Cricket","Football","Live","Singing","Dancing","Travel","Coding","Cooking","Vines","Vlogs"];

  return (
  <div className='flex'>
    {
      array.map((list,index)=><div onClick={()=>dispatch(addText(list))} key={index}><button className='bg-gray-200 w-0 lg:w-auto text-transparent lg:text-black lg:px-4 lg:py-2 lg:ml-2 rounded-lg'>{list}</button></div>)
    }
    </div>
  )
}

export default ButtonList