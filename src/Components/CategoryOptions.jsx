const CategoryOption = (props) => {

    const options = props.categories?.map(category => {
        return <option key={category.id} value={category.id}>{category.title}</option>
    })

    return (
    <select defaultValue={null}  onChange={props.onChange} className='w-full p-2' name='category'>
        <option value={null}>None</option>
        {options}
   </select>)
}

export default CategoryOption;