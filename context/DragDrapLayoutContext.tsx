"use client"

import React, { createContext, useContext, useState } from "react"

interface DragDropLayoutProviderContextType {
  dragElemnt : any
  setdragElement : React.Dispatch<React.SetStateAction<any>>
}

export const  DragDropLayout = createContext<DragDropLayoutProviderContextType | undefined>(undefined)


export const DragDropLayoutProvider = ({children} : {children: React.ReactNode})=>{
  const [dragElemnt,setdragElement] = useState() 
  return <DragDropLayout.Provider value={{dragElemnt,setdragElement}}>{children}</DragDropLayout.Provider>
}

export const useDragDropLayout =()=>{
const context = useContext(DragDropLayout);
  if (context === undefined) {
    throw new Error("useScreen must be used within a ScreenProvider");
  }
  return context;
}