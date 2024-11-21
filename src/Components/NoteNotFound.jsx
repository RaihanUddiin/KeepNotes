import React from 'react'
import { useNavigate } from 'react-router-dom'

function NoteNotFound() {
    const navigate = useNavigate();
    const handleNavigate = () => navigate("/notes");
  return (
    <div className='w-screen h-[calc(100vh_-_64px)] flex flex-col justify-center items-center space-y-2 lg:space-y-4'>
        <h1 className='text-3xl font-bold '>Sorry !!!</h1>
        <h1 className='text-xl font-semibold '>Notes Not FOund !!!</h1>
        <button onClick={handleNavigate} className='w-44 h-auto p-2 flex items-center justify-center font-semibold rounded bg-black text-white hover:underline'>Go To Notes</button>
    </div>
  )
}

export default NoteNotFound