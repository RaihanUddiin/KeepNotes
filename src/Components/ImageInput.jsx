import { PhotoIcon } from '@heroicons/react/24/outline'
import React, { useRef } from 'react'

function ImageInput(props) {


    const imageInputRef = useRef(null);

    const handleImageInput = () => {
        if (!imageInputRef.current) return;
        imageInputRef?.current?.click();
    }

    const handleChange = e => {
        if(e.target?.files?.length){
            props.onChange(e.target.files[0])
        }
    }

    return (
        <>
            <div onClick={handleImageInput} className=' w-full h-full border border-gray-400 p-0.5 flex items-center justify-center rounded cursor-pointer'>
                <PhotoIcon className='w-full h-full' />
            </div>
            <input onChange={handleChange} ref={imageInputRef} className='hidden' type="file" />
        </>
    )
}

export default ImageInput