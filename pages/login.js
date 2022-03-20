import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import model2 from "../assets/model2.png"
import model3 from "../assets/model3.png"
import google from "../assets/google.png"
import instagram from "../assets/instagram.png"
import Header from '../components/Header'
// pages/index.jsx
import { signIn } from "next-auth/react"
import axios from "axios"

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase'

function login() {

  const initialState = {
    superAdmin: false,
    manager: false,
    influencer: false
  }
  const [influencers, setInfluencers] = useState([])

  // useEffect(() => {
  //   async function fetchData() {
  //     const req = axios.get('http:localhost:8001/influencers')
  //     setInfluencers(req.data);
  //   }
  //   fetchData();

  // }, [])


  const login = (e) => {
    e.preventDefault();
    
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user)
        }).catch((error) => alert(error.message))
}
  return (
    <div className='bg-gray-100  text-[#37364d]  h-screen flex  items-center'>
      <div className='flex justify-center items-center bg-gray-200 h-screen w-1/2'>
        <Image
          src={model3}
          alt='model3'
          objectFit='contain'
          width={600}
          height={600}
        />
      </div>
      <div className='w-1/2'>
        <div className='flex justify-center items-center'>
          <h1 className='font-bold text-3xl'>Login to Your Account</h1>
        </div>
        <div className='flex justify-center items-center '>
          <div className='flex-col justify-center items-center space-y-12 mt-12'>
            <div className={`flex justify-around items-center border-2 px-3 py-3 rounded-lg cursor-pointer hover:shadow-md  shadow-sm ${initialState.superAdmin ? 'border-blue-600 bg-transparent' : 'border-gray-200 bg-transparent'} `} onClick={() => setState(state => ({ ...initialState, superAdmin: true }))}>
              <h1 className='font-bold text-xl'>Super Admin</h1>
            </div>
            <div className={`flex justify-around items-center border-2 px-3 py-3 rounded-lg cursor-pointer hover:shadow-md shadow-sm ${initialState.manager ? 'border-blue-600 bg-transparent' : 'border-gray-200 bg-transparent'} `} onClick={() => setState(state => ({ ...initialState, manager: true }))}>
              <h1 className='font-bold text-xl'>Manager</h1>
            </div>
            <div className={`flex justify-around items-center border-2 px-3 py-3 rounded-lg cursor-pointer hover:shadow-md shadow-sm ${initialState.influencer ? 'border-blue-600 bg-transparent' : 'border-gray-200 bg-transparent'} `} onClick={() => setState(state => ({ ...initialState, influencer: true }))}>
              <h1 className='font-bold text-xl'>Influencer</h1>
            </div>
          </div>

          <div className='flex justify-center items-center ml-24'>
            <form>
              <h1 className='mt-10 '>Email</h1>
              <input placeholder='you@example.com' className='text-black font-normal mt-2 block w-64 px-4 py-2 bg-white border border-slate-300 rounded-md text-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' type="email" />
              <h1 className='mt-8'>Password</h1>
              <input placeholder='******' className=' text-black font-normal mt-2 block w-64 px-4 py-2 mb-5 bg-white border border-slate-300 rounded-md text-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' type="password" />
              <div className='flex space-x-2 justify-center items-center border-2 border-gray-200 rounded-lg w-56 h-12 shadow-md'>
                <button >Login</button>
              </div>
              {/* Sign with stuff */}
              <div className='flex space-x-3 mt-12'>
                <div  onClick={login} className='flex space-x-2  justify-center items-center border-2 border-gray-200 rounded-lg w-56 h-12 shadow-md'>
                  <Image
                    src={google}
                    alt='google'
                    objectFit='contain'
                    width={20}
                    height={20}
                  />
                  <button className='text-extrabold'>Sign in with Google</button>
                </div>
                <div onClick={() => signIn("instagram")} className='flex space-x-2 justify-center items-center border-2 border-gray-200 rounded-lg w-56 h-12 shadow-md'>
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
    </div>

  )
}

export default login