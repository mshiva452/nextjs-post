import React from 'react'

const Container = ({ children }: any) => {
    return (
        <div className='w-full mx-auto bg-white min-h-screen flex justify-between flex-col'>{children}</div>
    )
}

export default Container