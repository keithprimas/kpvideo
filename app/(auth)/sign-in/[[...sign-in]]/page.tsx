import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <main className='flex h-screen w-full items-center justify-center bg-clerk bg-cover bg-center bg-no-repeat'>
        <SignIn />
    </main>
  )
}

export default SignInPage
