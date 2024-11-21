import { nanoid } from 'nanoid';
import React, { useEffect, useRef, useState } from 'react'

function CategoryForm(props) {
    
    const inputRef = useRef(null);
    const [inputData, setInputData] = useState(props.initialData || {
        id: nanoid(5),
        title: ""
    });

    const handleCancel = () => {
        if (props.onCancel) {
            props.onCancel();
        }
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [])
    return (
        <div className='w-full h-fit flex gap-4 border border-gray-300 p-2 rounded items-center'>
            <input onChange={e => setInputData(prev => ({ ...prev, title: e.target.value }))} defaultValue={inputData.title} ref={inputRef} className='w-full text-lg border-none focus:outline-none bg-transparent' placeholder='enter category name' type='text' />
            <div className='flex gap-2 items-center'>
                <button onClick={handleCancel} className='h-full w-fit border border-gray-400 rounded p-2 text-gray-700'>Cancel</button>
                <button onClick={() => props.onSubmit(inputData)} className='h-full w-fit border border-gray-400 rounded p-2 text-gray-700'>Save</button>
            </div>
        </div>
    )


}

export default CategoryForm