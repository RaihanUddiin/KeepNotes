import React from 'react'
import Modal from './Modal'
import CategoryList from './CategoryList'
import CategoryFormItem from './CategoryFormItem'

function CategoryModal(props) {
  return (
    <Modal onOverlayClose isOpen= {props.isOpen} onOpenChange={props.setOpen} >
        <div className='w-auto h-auto min-w-44 min-h-24 rounded p-2 drop-shadow-lg bg-gray-100 space-y-2'>
            <CategoryList closeModal={props.setOpen}/>
            <CategoryFormItem/>
        </div>
    </Modal>
  )
}

export default CategoryModal