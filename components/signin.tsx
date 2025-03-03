"use client"
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios'
import React from 'react'
import { Button } from './ui/button';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

function Signin() {

  const  createUser = useMutation(api.user.createUser)

const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const userInfo = await axios.get(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } },
      );
  
      console.log(userInfo?.data);

     
      const id = await createUser({
        name: userInfo?.data?.name,
        email: userInfo?.data?.email,
        picture: userInfo?.data?.picture,
      });
      
      if (typeof window !== "undefined") {
        const userData = {
          ...userInfo?.data, 
          id: id, 
        };
        localStorage.setItem("user", JSON.stringify(userData));
      }
    },
    onError: errorResponse => console.log(errorResponse),
  });
  
  return (
    <Button className='bg-purple-600' onClick={()=>googleLogin()}>
            Get Started
        </Button>
  )
}

export default Signin