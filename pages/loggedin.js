import React from 'react'
import Left from '../components/Left'
import Mid from '../components/Mid'
import Right from '../components/Right'

function loggedin() {
    return (
        <div className='flex justify-evenly items-center flex-1'>
            <Left />
            <Mid />
            <Right />
        </div>
    )
}

export default loggedin