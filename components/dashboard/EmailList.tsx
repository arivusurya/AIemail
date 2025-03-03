"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from '../ui/button'

function EmailList() {
    const  [emails, setEmails] = useState([])
  return (
    <div>
           <h2 className='text-purple-600 text-xl font-bold mt-6'>Workspace</h2>
           {emails?.length === 0 && <div className='flex justify-center items-center flex-col'>

            <Image src={"/email.png"} width={500} height={500} alt='empty state email images'  />
            <Button className='bg-purple-600 px-5 font-bold'>
                Create
            </Button>           
            </div> }
    </div>
  )
}

export default EmailList