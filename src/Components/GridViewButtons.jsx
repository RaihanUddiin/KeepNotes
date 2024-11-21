import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Squares2X2Icon, QueueListIcon } from '@heroicons/react/24/outline'
import { useStore } from '../Hooks/GlobalStore';



function GridViewButtons() {

    const {viewMode, setViewMode} = useStore();

    const viewModeSetEffect = useCallback(() => {
        localStorage.setItem("view-mode", viewMode);
    }, [viewMode]);

    const handleChangeMode = () => {

        setViewMode(prev => {
            if (prev === 'grid') {
                return 'list'
            }
            else {
                return 'grid'
            }
        })

    }

    useEffect(() => {
        viewModeSetEffect();
    })
    return (
        <button onClick={handleChangeMode} className='p-2 lg:p-4 '>
            {viewMode == 'grid' ?
                (<Squares2X2Icon className='h-6 w-6 text-white' />)
                :
                (<QueueListIcon className='h-6 w-6 text-white' />)
            }
        </button>
    )
    return null;
}

export default GridViewButtons