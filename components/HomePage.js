import Link from 'next/link'
import React from 'react'
import Header from './Header'
import Main from './Main'


function HomePage() {
    return (
        <div className='flex-1 bg-gray-200 p-6'>
            <Header />
            <Main />
        </div>

    )
}

export default HomePage