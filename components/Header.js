import React from 'react'
import { useRouter } from 'next/router'

function Header() {
    const router = useRouter();

    const login = () => {

    }

    return (
        <div className='flex justify-between ml-10 mr-10 mt-6 text-[#37364d]'>
            <div className='flex justify-between space-x-6'>
                <img className='w-12 border-[#dc302b] border-2 rounded-full' src="https://thecrazyentrepreneur.com/wp-content/uploads/2021/07/tce_logo.png" alt="logo" />
                <h1 className='text-bold text-2xl mt-2'>The Crazy Entrepreneur</h1>
            </div>
            <div className='border-[#dc302b] text-black border-2 w-36 flex justify-center items-center hover:cursor-pointer hover:bg-black rounded-lg hover:text-white' onClick={()=>router.push('/login')}>
                <h1 className='text-bold text-xl '>Login</h1>
            </div>
        </div>
    )
}

export default Header