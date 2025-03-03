"use client"
import EmailList from '@/components/dashboard/EmailList'
import Heading from '@/components/Landing/Heading'
import { Button } from '@/components/ui/button'
import { useUser } from '@/context/UserContext'
import React from 'react'

function page() {
    const {user} = useUser()
  return (
    <div>
        <Heading/>
        <div className='p-10 md:px-28 lg:px-40 xl:px-56 mt-16'>
            <div className='flex justify-between'>
                <h2 className='font-bold text-3xl'>Hello <span className='text-purple-600'>{user?.name}</span> </h2>
                <Button className='bg-purple-500'> + Create New Email Template</Button>
            </div>
            <EmailList/>
        </div>
        
    </div>
  )
}

export default page