import Image from 'next/image'
import React from 'react'
import model from "../assets/model.png"
function Main() {
    return (
        <div className='text-white flex mt-20 justify-center w-full '>
            <div className='ml-20 mt-64 mr-20'>
                <h1 className='text-extrabold text-5xl  '>Social Media Manager</h1>
                <h1 className=' text-2xl  mt-12'>Manage your accounts easily.</h1>
                <h1 className=' text-2xl  '>Instagram verified.</h1>
            </div>
            <div className=' mr-20'>
                <Image
                    src={model}
                    alt='universe'
                    objectFit='contain'
                    width={770}
                    height={600}
                />
            </div>
        </div>
    )
}

export default Main