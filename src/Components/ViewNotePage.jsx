import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useStore } from '../Hooks/GlobalStore';
import NoteNotFound from './NoteNotFound';
import { PencilIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { noteService } from '../lib/noteService';
import EditNoteFormModal from './EditNoteFormModal';
import { categoryService } from '../lib/categoryService';

function ViewNotePage() {
    const {validateNotes} = useStore();
    const navigate = useNavigate();
    const {noteId} = useParams();

    const [isOpen, setOpen] = useState(false);


    const note = noteService.findById(noteId);

    const categoryId = note?.category;
    const categoryTitle = categoryId ? categoryService.findById(categoryId)?.title : null ;

    if(!note){
        return <NoteNotFound/>
    }

    const handleRemoveNote = () => {
        noteService.delete(noteId);
        validateNotes()
        navigate("/notes", {replace : true })
    }

    const handleEditModalOpen = () => setOpen(true)

    
  return (
    <>
    <div className='flex flex-col gap-2'>
        <div className='h-56 lg:h-72 relative flex items-center justify-center'>
            {note?.coverImg && <div className='absolute h-full w-full top-0 -z-10'>
                <img className='h-full w-full object-cover' src={note?.coverImg} alt=''/>
            </div>}
            <div className='absolute top-2 right-2 lg:right-4 lg:top-4 flex gap-4 justify-center items-center'> 
                <button onClick={handleEditModalOpen} className='p-2 rounded bg-gray-300 hover:bg-gray-400'> <PencilIcon className='h-6 w-6 '/> </button>
                <button onClick={ handleRemoveNote } className='p-2 rounded bg-gray-300 hover:bg-gray-400'><XMarkIcon className='h-6 w-6 text-red-400'/></button>
            </div>
            <div className='w-full max-w-screen-lg'>
                <h1 className='text-3xl font-semibold text-center'>{note?.title}</h1>
            </div>
        </div>
        <div className='w-full max-w-screen-lg px-2 mx-auto'>
            <h2 className='rounded border border-emerald-500 bg-emerald-300 w-fit h-auto px-2 text-xl'>{categoryTitle}</h2>
        </div>
        <div  className='w-full max-w-screen-lg px-2 mx-auto'>
            <p className='text-lg lg:text-xl text-justify '>{note?.content}</p>
        </div>
    </div>
    <EditNoteFormModal isOpen={isOpen} setOpen = {setOpen} note={note}/>
    </>
  )
}

export default ViewNotePage