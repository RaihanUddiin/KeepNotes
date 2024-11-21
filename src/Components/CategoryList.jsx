import React from 'react'
import CategoryItem from './CategoryItem'
import { useStore } from '../Hooks/GlobalStore'

function CategoryList(props) {
  const {categories} = useStore();

  const items = categories.map(category => <CategoryItem key={category.id} closeModal={props.closeModal} category={category}/>)

  return (
    <div className='flex flex-col gap-2'>
        {items}
    </div>
  )
}

export default CategoryList