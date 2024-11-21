import React, { useEffect, useState } from 'react'

function Modal(props) {
    const [onOverlayClose] = useState(props.onOverlayClose || false);

    const onClose = () => {
        props.onOpenChange(!props.isOpen);
        if (props.onClose) return props.onClose();
    }


    const onOverlayClick = () => {
        if (onOverlayClose) {
            onClose()
        }
    }

    useEffect(() => {
        if (props.isOpen) {
            document.body.style.overflow = 'hidden';
        }
        else
            document.body.style.overflow = 'auto';
    }, [props.isOpen])

    if (!props.isOpen) return null;
    return (
        <div onClick={onOverlayClick} className='h-screen w-screen absolute top-0 left-0 z-10 flex justify-center items-center backdrop-blur-md'>
            <div onClick={e=> e.stopPropagation()} className='z-20 h-fit w-fit '>
                {props.children}
            </div>

        </div>
    )
}

export default Modal