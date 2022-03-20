import Image from 'next/image';
import React, { useState, useContext, useEffect } from 'react';
import FOLLOWERS from '../assets/followers.png';
import following from '../assets/following.png';
import POSTS from '../assets/posts.png';
import { EngagementContext } from "../pages/Contexts/EngagementContext";
import axios from 'axios'

function Second() {

  const [token, setToken] = useState('');

  const { show, setShow, data, IMG, userDetails } = useContext(EngagementContext);


  return (
    <div className='flex-col items-center justify-center mt-10 ml-20 mr-20'>

      {/* Welcome user */}
      <div className='mt-5'>
        {/* <h1 className='text-4xl font-medium'>Hello, {userDetails.name}</h1> */}
        <h1 className='text-4xl font-medium'>Hello, Alia Bhagat</h1>
        <h3 className='text-lg mt-6 mb-6 text-gray-500'>Welcome Back !</h3>
      </div>


      {/* First Box */}
      <div className=' bg-gray-200 rounded-lg mt-5 w-[750px] h-[300px] flex justify-evenly items-center space-x-12 shadow-2xl'>
        <div>
          <div className='flex justify-center items-center w-16 h-16 bg-gray-300 rounded-full'>
            <Image
              src={FOLLOWERS}
              alt='followers'
              objectFit='contain'
              width={30}
              height={30}
            />
          </div>
          <h1 className='text-sm mt-6 ml-1 '>Followers</h1>
          {/* <h3 className='text-4xl font-bold mt-10 text-center'>{userDetails.followers_count}</h3> */}
          <h3 className='text-4xl font-bold mt-10 text-center'>12k</h3>
        </div>

        <div>
          <div className='flex justify-center items-center w-16 h-16 bg-gray-300 rounded-full'>
            <Image
              src={following}
              alt='followers'
              objectFit='contain'
              width={30}
              height={30}
            />
          </div>
          <h1 className='text-sm mt-6 ml-1 '>Following</h1>
          {/* <h3 className='text-4xl font-bold mt-10 text-center'>{userDetails.follows_count}</h3> */}
          <h3 className='text-4xl font-bold mt-10 text-center'>34k</h3>
        </div>

        <div>
          <div className='flex justify-center items-center w-16 h-16 bg-gray-300 rounded-full'>
            <Image
              src={POSTS}
              alt='POSTS'
              objectFit='contain'
              width={30}
              height={30}
            />
          </div>
          <h1 className='text-sm mt-6 ml-4 '>Posts</h1>
          {/* <h3 className='text-4xl font-bold mt-10 text-center'>{userDetails.media_count}</h3> */}
          <h3 className='text-4xl font-bold mt-10 text-center'>400</h3>
        </div>
      </div>

      {/* Second Box */}

      <div className='grid grid-cols-3 gap-4 mt-20 bg-gray-200 rounded-2xl p-10 shadow-2xl'>


        {/* Data fetching from ig */}
        {IMG.length > 0 ?
          (IMG.map((img) => (
            <div key={img.id} className='text-white'>
              <Image
                src={img.media_url}
                alt='media'
                objectFit='none'
                width={293}
                height={293}
                onClick={() => { (show.id == img.id) ? setShow({ showPost: false, id: '' }) : setShow({ showPost: true, id: img.id - 1 }) }}
              />
            </div>
          )))

          : ''}


        {/* {posts.map((post) => (
          <div key={post.id} >
            <Image
              src={post.imgUrl}
              alt='post-img'
              objectFit='none'
              width={293}
              height={293}
              onClick={() => { (show.id == post.id) ? setShow({ showPost: false, id: '' }) : setShow({ showPost: true, id: post.id - 1 }) }}
            />
          </div>
        ))} */}
      </div>


    </div >
  )
}

export default Second