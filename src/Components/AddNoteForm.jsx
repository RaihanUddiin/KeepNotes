import React, { useEffect, useRef, useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline';
import ImageInput from './ImageInput';
import NoteCoverImage from './NoteCoverImage';
import CategoryOption from './CategoryOptions';
import { nanoid } from 'nanoid';
import { useStore } from '../Hooks/GlobalStore';
import { fileSerivce } from '../lib/fileService';


function AddNoteForm(props) {
    const {validateNotes} = useStore()
    const [coverImage, setCoverImage] = useState(props.initialData?.coverImg || null);
    const titleInputRef = useRef(null);
    const {categories} = useStore();

    const [formData, setFormData] = useState( props.initialData || 
        {
            id: nanoid(5),
            title: "",
            coverImg: "",
            category: null ,
            content: ""
        });

    const handleOnChange = e => {
        setFormData(
            prev => {
                prev[e.target.name] = e.target.value 
                return prev;
            }
        )
    }

    const handleImageChange = async (image) => {
        const imageDataUrl = await fileSerivce.generateBase64FromFile(image);
        setCoverImage(image)

        setFormData(prev => {
            prev.coverImg = imageDataUrl;
            return prev;
        })

    }

    const handleImageRemove = () => {
        setCoverImage(null);
        setFormData(prev=>{
            prev.coverImg="";
            return prev;
        })
    }
    

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        if(formData.title.trim().length < 1 && formData.content.trim().length < 1 ) return window.alert("Your Note Is Empty!")
        if(props.onSubmit)props.onSubmit(formData)
        props.onCancel();
        validateNotes();
    }

    useEffect( ()=>{
        if(props.isExpand) {
            titleInputRef?.current?.focus();
        }
    },[props.isExpand])


    return (
        <div className="w-full h-auto p-2 lg:p-4 rounded border border-gray-500">
            <form onSubmit={handleOnSubmit} className='space-y-2'>
                <div className={`w-full flex gap-2  relative  ${coverImage ? "h-32 lg:44 flex items-center justify-center p-2" : " "}`}>
                    <input ref = { titleInputRef } defaultValue={formData.title} onChange={handleOnChange} placeholder='Write Title...' type='text' name='title' className={` w-full h-12 border border-gray-500 rounded p-2 ${coverImage ? "text-center border-none bg-transparent text-white font-semibold outline-none focus:outline-none" : ""}`} />
                    <div className={`${coverImage ? 'absolute top-2 right-10 h-6 w-6' : 'h-12 w-12 flex items-center justify-center'}`}> <ImageInput onChange={handleImageChange} /> </div>
                    {coverImage && <button onClick={handleImageRemove} className='absolute top-2 right-2' type='button'> <XMarkIcon className='h-6 w-6 text-red-400' /> </button>}
                    {coverImage && <div className='absolute bg-gray-400 top-0 left-0 w-full h-32 lg:h-44 -z-10'> <NoteCoverImage coverImage={formData.coverImg} /> </div>}
                </div>
                <CategoryOption onChange={handleOnChange}  categories={categories}/>
                <textarea defaultValue={formData.content} onChange={handleOnChange} placeholder='write your note...' name='content' className='w-full p-2' />
                <div className='w-full flex gap-2 md:justify-end'>
                    <button onClick={props.onCancel} type="button" className='btn  bg-black rounded p-2 text-white w-full md:w-24'>Cancel</button>
                    <button type="submit" className='btn bg-black rounded p-2 text-white w-full md:w-24 '>Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddNoteForm

