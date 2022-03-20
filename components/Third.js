import Image from 'next/image'
import React, { useContext } from 'react'
import impressions from "../assets/like.png"
import profile_views from "../assets/profile-views.png"
import reach from "../assets/reach.png"
import like from "../assets/like.png"
import share from "../assets/share.png"
import save from "../assets/save.png"
import comments from "../assets/comments.png"
import { EngagementContext } from "../pages/Contexts/EngagementContext";

function Third() {
  const { show, setShow, data, media, followers, mediaCount } = useContext(EngagementContext)
 
  return (
    <div className='h-[720px] w-[400px] bg-black mt-10 mb-10 mr-10 rounded-3xl'>
      {show.showPost ? (
        <div className='text-white'>
          <div className='ml-16 mt-10'>
            <h1 className='text-2xl text-gray-200'>Insights</h1>
          </div>
          <div className='flex-col ml-16 mt-8 space-y-8 text-gray-200'>
            <div className='flex '>
              <div className='flex justify-center items-center w-12 h-12 bg-gray-200 rounded-full '>
                <Image
                  src={like}
                  alt='like'
                  objectFit='contain'
                  width={25}
                  height={25}
                />
              </div>

              <div className='flex-col ml-10'>
                <h1 className='text-2xl'>{posts[show.id].likes}</h1>
                <h1 className='text-sm'>Likes</h1>
              </div>
            </div>
            <div className='flex '>
              <div className='flex justify-center items-center w-12 h-12 bg-gray-200 rounded-full '>
                <Image
                  src={comments}
                  alt='comments'
                  objectFit='contain'
                  width={25}
                  height={25}
                />
              </div>

              <div className='flex-col ml-10'>
                <h1 className='text-2xl'>{posts[show.id].comments}</h1>
                <h1 className='text-sm'>Comments</h1>
              </div>
            </div>
            <div className='flex'>
              <div className='flex justify-center items-center w-12 h-12 bg-gray-200 rounded-full '>
                <Image
                  src={share}
                  alt='share'
                  objectFit='contain'
                  width={25}
                  height={25}
                />
              </div>

              <div className='flex-col ml-10'>
                <h1 className='text-2xl'>{posts[show.id].shares}</h1>
                <h1 className='text-sm'>Shares</h1>
              </div>
            </div>
            <div className='flex'>
              <div className='flex justify-center items-center w-12 h-12 bg-gray-200 rounded-full '>
                <Image
                  src={save}
                  alt='save'
                  objectFit='contain'
                  width={25}
                  height={25}
                />
              </div>

              <div className='flex-col ml-10'>
                <h1 className='text-2xl'>{posts[show.id].saves}</h1>
                <h1 className='text-sm'>Saves</h1>
              </div>
            </div>
          </div>
        </div>
      )
        : (
          <>
            <div className='ml-16 mt-10'>
              <h1 className='text-2xl  text-gray-200'>Engagement</h1>
            </div>

            <div className='flex-col ml-16 mt-8 space-y-8 text-gray-200'>
              <div className='flex '>
                <div className='flex justify-center items-center w-12 h-12 bg-gray-200 rounded-full '>
                  <Image
                    src={reach}
                    alt='reach'
                    objectFit='contain'
                    width={25}
                    height={25}
                  />
                </div>

                <div className='flex-col ml-10'>
                  <h1 className='text-2xl'>20k</h1>
                  <h1 className='text-sm'>Reach</h1>
                </div>
              </div>
              <div className='flex'>
                <div className='flex justify-center items-center w-12 h-12 bg-gray-200 rounded-full '>
                  <Image
                    src={profile_views}
                    alt='profile_views'
                    objectFit='contain'
                    width={25}
                    height={25}
                  />
                </div>

                <div className='flex-col ml-10'>
                  <h1 className='text-2xl'>10k</h1>
                  <h1 className='text-sm'>Profile Views</h1>
                </div>
              </div>
              <div className='flex'>
                <div className='flex justify-center items-center w-12 h-12 bg-gray-200 rounded-full '>

                  <Image
                    src={impressions}
                    alt='impressions'
                    objectFit='contain'
                    width={25}
                    height={25}
                  />
                </div>

                <div className='flex-col ml-10'>
                  <h1 className='text-2xl'>50k</h1>
                  <h1 className='text-sm'>Impressions</h1>
                </div>
              </div>
            </div>
          </>

        )

      }

    </div>

  )
}

export default Third