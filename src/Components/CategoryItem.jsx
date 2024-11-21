import { PencilIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import CategoryForm from './CategoryForm'
import { categoryService } from '../lib/categoryService';
import { useStore } from '../Hooks/GlobalStore';
import { useNavigate, useSearchParams } from 'react-router-dom';

function CategoryItem(props) {
  const [searchParams, setSearchParams] = useSearchParams()
  const {validateCategories} = useStore()
  const [isEdit, setEdit] = useState(false)
  const navigate = useNavigate();


  const {id, title}=props.category;
  
  const handleEditMode = (e) => {
    e.stopPropagation();
    setEdit(!isEdit);}

  const handleUpdate = (category) => {
    categoryService.update(category);
    validateCategories();
    handleEditMode();
  }
  const handleDelete = (e) =>{
    e.stopPropagation();
    const confirm = window.confirm("Are you sure to delete? ")
    if(!confirm) return 

    categoryService.delete(id);
    validateCategories();
  }

  const handleSearchParams = () => {
    navigate("/notes?category="+id)
    // setSearchParams(prev => {
    //   prev.set("category", id)
    //   return prev;
    // })
    props.closeModal(false);
    
  }

  if(isEdit)return <CategoryForm onCancel={handleEditMode} initialData={props.category} onSubmit={handleUpdate} />
  return (
    <div onClick={handleSearchParams} className='w-full h-fit flex gap-4 border-b border-b-gray-300 p-2 cursor-pointer'>
        <h2 className='w-full text-lg font-semibold'>{title}</h2>
        <div className='flex gap-2 items-center'>
            <button onClick={handleEditMode}><PencilIcon className='h-6 w-6 border border-gray-400 rounded p-1 text-gray-700'/></button>
            <button onClick={handleDelete}><XMarkIcon className='h-6 w-6 border border-gray-400 rounded p-1 text-red-400'/></button>
        </div>
    </div>
  )
}

export default CategoryItem