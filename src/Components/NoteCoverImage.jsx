import React from 'react'

function NoteCoverImage(props) {
  
  return (
    <div className='w-full h-full'>
        <img className='w-full h-full object-cover ' src={props.coverImage} alt='cover-images'/>
    </div>
  )
}

export default NoteCoverImage