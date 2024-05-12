import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <main className='flex h-screen w-full items-center justify-center bg-clerk bg-cover bg-center bg-no-repeat'>
        <SignUp />
    </main>
  )
}

export default SignUpPage
