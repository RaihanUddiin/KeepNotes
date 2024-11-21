import React, { useEffect, useState } from 'react'
import NoteCard from './NoteCard'
import { useStore } from '../Hooks/GlobalStore'
import { useSearchParams } from 'react-router-dom';
import { noteService } from '../lib/noteService';
import { categoryService } from '../lib/categoryService';
function AllNotes() {
  const [searchParams] = useSearchParams();
  const { viewMode } = useStore();
  const [filter, setFilter] = useState({
    categoryId: null,
    search: null
  })

  const allNotes = noteService.findByCategorySearch(filter)?.map(note => {
    return <NoteCard key={note.id} note={note} />
  })

  useEffect(() => {
    const categoryId = searchParams.get('category');
    const search = searchParams.get('search');

    if (categoryId) {
      setFilter(prev => ({ ...prev, categoryId }))
    }

    if (search) {
      setFilter(prev => ({ ...prev, search }))
    } else
      setFilter(prev => ({ ...prev, search : null }))

  }, [searchParams])

  return (<div className='h-full w-full flex flex-col items-center gap-2'>
    <h3 className='text-xl text-left font-semibold max-w-screen-lg w-full'>{filter.categoryId ? `${categoryService.findById(filter.categoryId).title} Notes : ` : 'All Notes :'}</h3>
    {
      allNotes.length > 0 ? <div className={`${viewMode === "grid" ? 'p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4 max-w-screen-lg w-full' :
        "p-2 grid grid-cols-1 gap-2 max-w-screen-lg justify-start w-full "}`}>
        {allNotes}
      </div> : <EmptyNoteMessage />
    }
  </div >
  )
}

export default AllNotes

const EmptyNoteMessage = () => {
  return <div className='min-h-24 w-fit p-4 flex items-center justify-center'> <h1>There are no notes found ! Please Create a note.</h1> </div>
}