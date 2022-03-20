import React, { useContext, useState } from 'react'
import Home from '../assets/home.png';
import Project from '../assets/achievement.png';
import Billing from '../assets/bank.png';
import Influencer from '../assets/user.png'
import Stats from '../assets/bar-chart.png';
import Settings from '../assets/gear.png';
import Manager from '../assets/manager.png';
import Schedule from '../assets/schedule.png';
import Image from 'next/image';
import { EngagementContext } from "../pages/Contexts/EngagementContext";
import { useRouter } from 'next/router'

function First() {

  const { show, setShow, data, media, userDetails } = useContext(EngagementContext);
  const router = useRouter();

  return (
    <div className='flex-col mt-28'>

      <div className='flex justify-center items-center ml-6  mb-72'>
        <div className='flex-col space-y-8'>
          <div className='mt-2 mr-4 hover:cursor-pointer'>
            <Image
              src={Home}
              alt='Home'
              objectFit='contain'
              width={20}
              height={20}
            />
          </div>
          <div className='mt-2 mr-4 hover:cursor-pointer' onClick={() => router.push('/viewInfluencers')}>
            <Image
              src={Influencer}
              alt='Influencer'
              objectFit='contain'
              width={20}
              height={20}
            />
          </div>
          <div className='mt-2 mr-4 hover:cursor-pointer' onClick={() => router.push('/schedulePost')}>
            <Image
              src={Schedule}
              alt='Schedule'
              objectFit='contain'
              width={20}
              height={20}
            />
          </div>
          <div className='mt-2 mr-4 hover:cursor-pointer' onClick={() => router.push('/settings')}>
            <Image
              src={Settings}
              alt='Settings'
              objectFit='contain'
              width={20}
              height={20}
            />
          </div>
        </div>

        <div className='flex-col space-y-8'>
          <div className='hover:cursor-pointer'>
            <h1>Home</h1>
          </div>
          <div className='hover:cursor-pointer' onClick={() => router.push('/viewInfluencers')}>
            <h1 >View Influencers</h1>
          </div>
          <div className='hover:cursor-pointer' onClick={() => router.push('/schedulePost')}>
            <h1>Schedule Post</h1>
          </div>
          <div className='hover:cursor-pointer' onClick={() => router.push('/settings')}>
            <h1>Settings</h1>
          </div>
        </div>
      </div>
      {userDetails.profile_picture_url ?

        < div className='flex-col px-8 py-7 w-44 h-44 ml-8 rounded-lg shadow-lg'>
          <div className=' hover:border-blue-500 hover:border-2 hover:rounded-full transition hover:scale-125 hover:cursor-pointer hover:ease-out w-20 h-20 ml-3 mb-4'>
            <Image
              src={userDetails?.profile_picture_url}
              alt='pfp'
              objectFit='contain'
              width={160}
              height={160}
              className='rounded-full'
              loading='lazy'
            />
          </div>
          <h1 className='font-semibold text-lg cursor-pointer text-center'>{userDetails.username}</h1>
        </div>
        : ''
      }
    </div >

  )
}

export default First