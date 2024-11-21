import React from 'react'

function CategoryAddButton(props) {
  return (
    <div>
        <button onClick={props.onSubmit} className='w-full h-fit border border-black rounded p-2 text-center font-semibold text-lg'>Add Category </button>
    </div>
  )
}

export default CategoryAddButton