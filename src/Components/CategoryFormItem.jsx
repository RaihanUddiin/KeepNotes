import React, { useState } from 'react'
import CategoryForm from './CategoryForm'
import CategoryAddButton from './CategoryAddButton'
import { categoryService } from '../lib/categoryService'
import { useStore } from '../Hooks/GlobalStore'

function CategoryFormItem() {
    const {validateCategories} = useStore()
    const [isAddButton, setAddButton] = useState(true)

    const handleChange = () => setAddButton(prev => !prev)

    const handleSaveCategory = (category) => {
        if(category.title.trim().length < 1) return window.alert("Category is empty!");
        categoryService.save(category);
        handleChange();
        validateCategories()

    }

    if (isAddButton) {
        return <CategoryAddButton onSubmit={handleChange} />
    }

    return (<CategoryForm onCancel={handleChange} onSubmit={handleSaveCategory} />
    )
}

export default CategoryFormItem