import MeetingTypeList from '@/components/MeetingTypeList';
import React from 'react'

const Home = () => {
  const now = new Date();
  const date = (new Intl.DateTimeFormat('en-US', {dateStyle: 'full'})).format(now);

  return (
    <section className='flex size-full flex-col gap-10 text-white'>
        <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
            <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
                <div className='flex flex-col gap-2'>
                  <p className='text-4xl font-bold text-sky-1 lg:text-2xl'>{date}</p>
                </div>
            </div>
        </div>


      <MeetingTypeList />
    </section>
  )
}

export default Home