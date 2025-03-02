import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import Signin from '../signin'

function Hero() {
  return (
    <div className='px-10 md:px-28 lg:px-44 flex flex-col justify-center items-center mt-10'>
        <h2 className='font-bold text-center text-4xl'>AI Powered <span className='text-purple-600'>Email Templates</span> </h2>
        <p className='text-center mt-4'>Longing to impress clients with AI-powered emails but don’t have enough time to build them on your own? Use the AI-powered email templates that already have AI-generated imagery and copy — save time on email production with us.</p>
        <div className='flex gap-2 mt-4'>
            <Button variant={"outline"}>Try Demo</Button>
            <Signin/>
        </div>
        <Image src={"/landing.png"} width={1000} height={800} alt='' className='mt-4 rounded-2xl'/>
    </div>
  )
}

export default Hero