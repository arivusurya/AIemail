import Layout from '@/data/Layout'
import React from 'react'
import ElementLayoutCard from './ElementLayoutCard'
import ElementList from '@/data/ElementList'

function ElementSideBar() {
  return (
    <div className='p-5'>
        <h2 className='font-bold text-lg'>Layouts</h2>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-5 mt-3'>
            { Layout?.map((LayoutItem,index)=>(<ElementLayoutCard LayoutItem={LayoutItem} index={index} key={index} />))}
        </div>
        <h2 className='font-bold text-lg mt-2'>Element</h2>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-5 mt-3'>
            { ElementList?.map((LayoutItem,index)=>(<ElementLayoutCard LayoutItem={LayoutItem} index={index} key={index} />))}
        </div>
    </div>
  )
}

export default ElementSideBar