
import { useSearchParams } from 'react-router-dom'

function Searchbar() {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleChange = e => {
    const value = e.target.value;
    if (value.length === 0) {
      setSearchParams(prev => {
        prev.delete("search")
        return prev;
      })
    } else
      setSearchParams(prev => {
        prev.set("search", e.target.value)
        return prev;
      })
  }

  return (
    <div className='h-full w-full max-w-full border border-gray-400 flex rounded-lg overflow-hidden'>
      <input onChange={handleChange} type="text" placeholder='Search note here ...' className='w-full p-2 px-4 focus:outline-none' />
    </div>
  )
}

export default Searchbar