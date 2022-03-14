import React from 'react'
import Home from '../assets/home.png';
import Project from '../assets/achievement.png';
import Billing from '../assets/bank.png';
import Influencer from '../assets/user.png'
import Stats from '../assets/bar-chart.png';
import Settings from '../assets/gear.png';
import Manager from '../assets/manager.png';
import Schedule from '../assets/schedule.png';
import Image from 'next/image';


function First() {
  return (
    <div className='flex-col mt-28'>

      <div className='flex justify-center items-center ml-6  mb-72'>
        <div className='flex-col space-y-8'>
          <div className='mt-2 mr-4 cursor-pointer'>
            <Image
              src={Home}
              alt='Home'
              objectFit='contain'
              width={20}
              height={20}
            />
          </div>
          <div className='mt-2 mr-4 cursor-pointer'>
            <Image
              src={Influencer}
              alt='Influencer'
              objectFit='contain'
              width={20}
              height={20}
            />
          </div>
          <div className='mt-2 mr-4 cursor-pointer'>
            <Image
              src={Schedule}
              alt='Schedule'
              objectFit='contain'
              width={20}
              height={20}
            />
          </div>
          <div className='mt-2 mr-4 cursor-pointer'>
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
          <div className='cursor-pointer'>
            <h1 className=''>Home</h1>
          </div>
          <div className='cursor-pointer'>
            <h1 className=''>View Influencers</h1>
          </div>
          <div className='cursor-pointer'>
            <h1 className=''>Schedule Post</h1>
          </div>
          <div className='cursor-pointer'>
            <h1 className=''>Settings</h1>
          </div>
        </div>
      </div>

      <div className='flex-col px-8 py-7 w-44 h-44 ml-8 rounded-lg shadow-lg'>
        <div className=' hover:border-blue-500 hover:border-2 hover:rounded-full transition hover:scale-125 hover:cursor-pointer hover:ease-out w-20 h-20 ml-3 mb-4'>
          <img className='rounded-full' src="https://avatarfiles.alphacoders.com/161/thumb-161485.png" alt="morty" />
        </div>
        <h1 className='font-semibold text-lg cursor-pointer text-center'>Elon Musk</h1>
      </div>
    </div>

  )
}

export default First