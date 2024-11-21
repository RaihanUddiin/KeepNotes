import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function RidirectToNotes() {
    const navigate = useNavigate();
    useEffect(() =>{
        navigate("/notes")

    },[])
  return (
    <></>
  )
}

export default RidirectToNotes