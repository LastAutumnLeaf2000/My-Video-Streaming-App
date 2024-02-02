import React from 'react'
import { CommentsData } from './CommentsData'
import Comment from './Comment'

const CommentsContainer = () => {
  return (
    <div className='ml-6'>
    <div className='font-bold text-2xl mb-3'>Comments</div>
    <Comment commentData={CommentsData}/>
    </div>
  )
}

export default CommentsContainer