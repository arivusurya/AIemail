import React from 'react'

function ElementLayoutCard({LayoutItem , index} : {LayoutItem :any , index : number}) {
  return (
    <div key={index} className='flex justify-center group hover:shadow-md hover:text-purple-600 cursor-pointer hover:border-purple-600 items-center flex-col border border-dashed rounded-xl p-3'>
    <LayoutItem.icon className='group-hover:bg-purple-100 rounded-full p-2 h-9 w-9'/>
    <h2 className='font-medium text-sm '>{LayoutItem?.label}</h2>
</div>
  )
}

export default ElementLayoutCard