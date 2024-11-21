import React from 'react'
import AddNotes from './AddNotes'
import AllNotes from './AllNotes'

function Home() {
    return (
        <div className='h-full w-screen flex flex-col justify-center items-center space-y-2 md:space-y-4 lg:space-y-6'>

            <div className='w-full lg:max-w-screen-md h-full p-2 lg:p-4 flex item-center mx-auto'>
                <AddNotes />
            </div>

            <AllNotes />
        </div>
    )
}

export default Home