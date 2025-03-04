"use client";

import React, { createContext, useContext, useState } from "react";

interface EmailTemplateContext {
    emailtemplate : any
    setemailtemplate : React.Dispatch<React.SetStateAction<any>>
}

const  EmailTemplateContext = createContext<EmailTemplateContext | undefined>(undefined);

export const  EmailTemplateContextProvider = (children: React.ReactNode)=>{
   
    const  [emailtemplate,setemailtemplate] = useState()

   return <EmailTemplateContext.Provider value={{emailtemplate,setemailtemplate}} >
    {children}
    </EmailTemplateContext.Provider>
}


export const  useEmail = ()=>{
const context = useContext(EmailTemplateContext);
  if (context === undefined) {
    throw new Error("useScreen must be used within a ScreenProvider");
  }
  return context;
}