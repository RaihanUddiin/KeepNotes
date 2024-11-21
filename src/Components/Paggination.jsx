import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { classNames } from '../utils/stringUtils'

function Paggination(props) {
    return (
        <div></div>
    )
}

export default Paggination


const BulkShiptButton = (props) => {

    const disabled = (props.first && props.mode === "PREV") || (props.last && props.mode === "NEXT") || (props.total === 1)

    if (props.mode === 'RIGHT') return <button onClick={props.onSubmit}  disabled={disabled} className='border p-2 flex items-center justify-center'>
        <ChevronDoubleRightIcon className='h-6 w-6 ' />
    </button>

    return <button onClick={props.onSubmit} disabled={disabled} className='border p-2 flex items-center justify-center'>
        <ChevronDoubleLeftIcon className='h-6 w-6 ' />
    </button>
}

const ShiftButton = (props) => {

    const disabled = (props.first && props.mode === "PREV") || (props.last && props.mode === "NEXT") || (props.total === 1)

    if (props.mode === 'RIGHT') return <button onClick={props.onSubmit}  disabled={disabled} className='border p-2 flex items-center justify-center'>
        <ChevronRightIcon className='h-6 w-6 ' />
    </button>

    return <button onClick={props.onSubmit} disabled={disabled} className='border p-2 flex items-center justify-center'>
        <ChevronLeftIcon className='h-6 w-6 ' />
    </button>
}

const PageButton = (props) => {



    return <button className={
        classNames(
            'p-2 text-xl' ,
            {
                'bg-black text-white' : props.active,
            }
        )
    }>
        {props.current}
    </button>
}