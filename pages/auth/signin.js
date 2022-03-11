import React, { useState } from 'react'
import { getProviders, signIn as signIntoProvider } from "next-auth/react";
import Image from 'next/image'
import model2 from "/assets/model2.png"
import google from "/assets/google.png"
import instagram from "/assets/instagram.png"

function signin({ providers }) {
  const initialState = {
    superAdmin: false,
    manager: false,
    influencer: false
  }
  const [state, setState] = useState(initialState);

  return (
    <>
      <div className='bg-black text-white h-screen'>
        <div className='flex justify-center items-center p-32'>
          <h1 className='font-bold text-4xl'>Login to Your Account</h1>
        </div>

        <div className='flex justify-center items-center '>
          <div className='flex-col justify-center items-center space-y-12 mt-12'>
            <div className={`flex justify-around items-center border-2  h-14 w-64 rounded-lg cursor-pointer ${initialState.superAdmin ? 'border-blue-600 bg-transparent' : 'border-red-600 bg-transparent'} `} onClick={() => setState(state => ({ ...initialState, superAdmin: true }))}>
              <h1 className='font-bold text-2xl'>Super Admin</h1>
            </div>
            <div className={`flex justify-around items-center border-2  h-14 w-64 rounded-lg cursor-pointer ${initialState.manager ? 'border-blue-600 bg-transparent' : 'border-red-600 bg-transparent'} `} onClick={() => setState(state => ({ ...initialState, manager: true }))}>
              <h1 className='font-bold text-2xl'>Manager</h1>
            </div>
            <div className={`flex justify-around items-center border-2  h-14 w-64 rounded-lg cursor-pointer ${initialState.influencer ? 'border-blue-600 bg-transparent' : 'border-red-600 bg-transparent'} `} onClick={() => setState(state => ({ ...initialState, influencer: true }))}>
              <h1 className='font-bold text-2xl'>Influencer</h1>
            </div>
          </div>

          <div className='flex justify-center items-center ml-24'>
            <form>
              <h1 className='mt-10 '>Email</h1>
              <input placeholder='you@example.com' className='text-black font-normal mt-2 block w-full px-7 py-2 bg-white border border-slate-300 rounded-md text-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' type="email" />
              <h1 className='mt-8'>Password</h1>
              <input placeholder='******' className=' text-black font-normal mt-2 block w-full px-7 py-2 bg-white border border-slate-300 rounded-md text-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' type="password" />


              {/* Sign with stuff */}
              <div className='flex space-x-3 mt-12'>

                {Object.values(providers).map((provider) => (
                  <div onClick={() => signIntoProvider(provider.id)} className='flex space-x-2  justify-center items-center border-2 border-gray-200 rounded-lg w-56 h-12' key={provider.name}>
                    <Image
                      src={google}
                      alt='google'
                      objectFit='contain'
                      width={20}
                      height={20}        
                    />
                    <button className='text-white text-extrabold'>
                      Sign in with {provider.name}
                    </button>
                  </div>
                ))}
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
        </div>
      </div>


    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers
    }
  }
}

export default signin