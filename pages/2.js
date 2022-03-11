import Image from 'next/image'
import React from 'react'
import model2 from "../assets/model2.png"
import google from "../assets/google.png"
import instagram from "../assets/instagram.png"
import Header from '../components/Header'

function login() {

    return (
        <div className='bg-black p-36'>
            <div className='flex text-white justify-center items-center rounded-lg p-10 ml-36 mr-36 mt-20 mb-20'>

                <div className='flex justify-center items-center ml-24'>
                    <form>
                        <h1 className='text-bold text-4xl'>Login to your account</h1>
                        <div className='flex items-center justify-center space-x-8'>
                            <h1 className='text-bold text-2xl'>Manager</h1>
                            <input type="radio" className='mt-4' />
                        </div>
                        <div className='flex items-center justify-center space-x-4'>
                            <h1 className='text-bold text-2xl'>Influencer</h1>
                            <input type="radio" className='mt-4' />
                        </div>
                        <h1 className='mt-10 '>Email</h1>
                        <input className='mt-2 block w-full px-7 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' type="email" />
                        <h1 className='mt-8'>Password</h1>
                        <input className=' mt-2 block w-full px-7 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' type="email" />


                        {/* Sign with stuff */}
                        <div className='flex space-x-3 mt-12'>
                            <div className='flex space-x-2  justify-center items-center border-2 border-gray-200 rounded-lg w-56 h-12'>
                                <Image
                                    src={google}
                                    alt='google'
                                    objectFit='contain'
                                    width={20}
                                    height={20}
                                />
                                <button className='text-extrabold'>Sign in with Google</button>
                            </div>
                            <div className='flex space-x-2 justify-center items-center border-2 border-gray-200 rounded-lg w-56 h-12'>
                                <Image
                                    src={instagram}
                                    alt='instagram'
                                    objectFit='contain'
                                    width={20}
                                    height={20}
                                />
                                <button className='text-extrabold'>Sign in with Instagram</button>
                            </div>
                        </div>

                    </form>
                </div>
                <div className='flex bg-green justify-center items-center ml-20 mt-12 '>
                    <Image
                        src={model2}
                        alt='img'
                        objectFit='contain'
                        width={770}
                        height={600}
                    />
                </div>


            </div>
        </div>
    )
}

export default login