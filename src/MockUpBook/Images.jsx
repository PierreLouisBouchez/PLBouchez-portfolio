import React from 'react'
import CustomFileInput from './CustomFileInput'

function Images() {
    return (
        <div className='flex flex-col  gap-y-2'>
            <div className='h-auto bg-gray-300   w-full flex-col flex p-2  border-2'>
                <h2>Front cover</h2>
                <CustomFileInput name={"front"} />
            </div>
            <div className='h-auto bg-gray-300  flex  w-full flex-col  p-2  border-2'>
                <h2>Side</h2>
                <CustomFileInput name={"side"} />
            </div>
            <div className='h-auto bg-gray-300  flex w-full flex-col  p-2  border-2'>
                <h2>Back cover</h2>
                <CustomFileInput name={"back"} />
            </div>
        </div>
    )
}

export default Images