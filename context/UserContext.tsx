"use client"
import React, {createContext, useContext, useEffect, useState} from "react"
interface User {
    id? : string,
    name :string,
    picture :string
    email : string
}

interface UserContextType {
    user : User  | null
    setUser : React.Dispatch<React.SetStateAction<User | null>>
    loding : boolean
} 

export const UserContext  = createContext<UserContextType | undefined>(undefined);

export  function  UserProvider({children} : {children:React.ReactNode}) {
    const [user,setUser] = useState<User | null>(null)
    const [loding,setloading] = useState<boolean>(false)

    useEffect(()=>{
        setloading(true)
        const user = localStorage?.getItem("user")

        if(user) {
            try {
                setUser(JSON?.parse(user))  
                setloading(false)
            }catch(error){
                console.log(error)
                setloading(false)
            }
        }
    },[])


    return <UserContext.Provider value={{user,setUser,loding}}>{children}</UserContext.Provider>
}

export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
      throw new Error("useUser must be used within a UserProvider");
    }
    return context;
  }



