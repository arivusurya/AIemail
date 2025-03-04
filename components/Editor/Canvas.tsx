"use client"
import { useDragDropLayout } from '@/context/DragDrapLayoutContext'
import { useScreen } from '@/context/ScreenContext'
import React from 'react'

function Canvas() {
  const  {screen} = useScreen()
  const {dragElemnt} = useDragDropLayout()

  const  handleDragOver = (e :React.DragEvent)=>{
    e?.preventDefault();
    console.log("Over ...")
  }
  const onDrop = ()=>{
    console.log("Element => ", dragElemnt)
  }
  return (
    <div className='flex justify-center mt-20'>
        <div className={`bg-white w-full p-6 ${screen === "desktop" ? " max-w-4xl" : "max-w-2xl"}`}
          onDragOver={handleDragOver}
          onDrop={onDrop}
        ></div>
    </div>
  )
}

export default Canvas