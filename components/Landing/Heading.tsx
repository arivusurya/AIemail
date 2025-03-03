"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { useUser } from '@/context/UserContext'
import Link from 'next/link'

function Heading() {
  const  {user} = useUser()
  return (
    <div className='flex justify-between p-8  shadow-sm'>
        <Image src="/logo.svg" width={180} height={180}  alt='logo'/>
        <div >
          { user?.email ?  <div className='flex items-center gap-2'>
            <Link className='' href={"/dashboard"}>          
            <Button className='bg-purple-600' >Dashboard</Button>
            </Link>
  
            <Image src={user?.picture} width={35} height={35} alt='userProfile' className='rounded-full' />
          </div> :
            <Button className='bg-purple-600'>Get Started</Button>  
          }
            </div>
    </div>
  )
}

export default Heading