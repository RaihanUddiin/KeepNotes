import React, { useState } from 'react'
import AddNoteForm from './AddNoteForm';
import { noteService } from '../lib/noteService';

function AddNotes({expand=false}) {

  const [expanded, setExpanded] = useState(expand);

  const handleExpand = () => {
    setExpanded(
      (prev) => {
        return !prev
      }
    )
  }

  const handleAddNote = (note) =>  noteService.save(note)

  if (!expanded) {
    return (
      <div onClick={handleExpand} className='w-full h-auto p-2 lg:p-4 rounded border border-gray-500 flex item-start '>
        <button className='h-full w-full p-1 text-xl font-semibold text-left tracking-wide '>Add Notes...</button>
      </div>
    )
  }

  return(
      <AddNoteForm isExpand = {expanded} onCancel={handleExpand} onSubmit={handleAddNote} />
  )
}

export default AddNotes