import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

function Heading() {
  return (
    <div className='flex justify-between p-8  shadow-sm'>
        <Image src="/logo.svg" width={180} height={180}  alt='logo'/>
        <div >
            <Button className='bg-purple-600'>Get Started</Button>
        </div>
    </div>
  )
}

export default Heading