import MeetingTypeList from '@/components/MeetingTypeList';
import React from 'react'

const Home = () => {

  return (
    <section className='flex size-full flex-col gap-10 text-white'>
        <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
            <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
                <div className='flex flex-col gap-2'>
                  <h1 className='text-4xl font-extrabold lg:text-7xl sm:text-2xl'>Let's get started!</h1>
                </div>
            </div>
        </div>


      <MeetingTypeList />
    </section>
  )
}

export default Home