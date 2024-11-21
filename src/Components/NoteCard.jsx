import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useStore } from '../Hooks/GlobalStore'
import { useNavigate } from 'react-router-dom';
import { sliceString } from '../utils/stringUtils';
import { noteService } from '../lib/noteService';
import { categoryService } from '../lib/categoryService';

function NoteCard({ note }) {

    const { viewMode, validateNotes } = useStore();

    const navigate = useNavigate();
    const categoryId = note.category;
    const categoryTitle = categoryId ? categoryService.findById(categoryId)?.title : null;

    const handleNavigate = (id) => {
        const url = "/notes/" + id;
        return navigate(url)
    }

    const handleDelete = (e) => {
        e.stopPropagation();
        noteService.delete(note.id)
        validateNotes()
    }


    if (viewMode === "grid") {
        return <div onClick={() => handleNavigate(note.id)} className='flex flex-col gap-2 rounded bg-gray-100 p-2 lg:h-72 w-full cursor-pointer'>
            <p className='text-sm border border-emerald-500 bg-emerald-300 rounded p-1 w-fit'>{categoryTitle}</p>
            <div className='flex justify-between gap-2 py-1 items-center'>
                <h3 className='font-semibold text-lg '>{sliceString(note.title, 30)}</h3>

                <button onClick={handleDelete} className='border border-gray-500 p-2 '>
                    <XMarkIcon className='w-6 h-6 text-red-400' />
                </button>

            </div>

            <div>

                <p className='text-gray-800 tracking-wide text-start'>{sliceString(note.content, 200)}</p>

            </div>
        </div>

    }

    return (
        <div onClick={() => handleNavigate(note.id)} className='p-2 bg-gray-100 rounded cursor-pointer w-full h-full '>
            <p className='text-sm border border-emerald-500 bg-emerald-300 rounded p-1 w-fit'>{categoryTitle}</p>
            <div className='flex justify-between items-center w-full'>

                <h3 className='font-semibold text-lg'>{note.title}</h3>
                <button onClick={handleDelete} className='border border-gray-500 p-2'>
                    <XMarkIcon className='w-6 h-6 text-red-400' />
                </button>
            </div>

        </div>
    )
}

export default NoteCard