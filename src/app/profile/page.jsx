"use client"
import React from 'react'
import { authClient } from "@/lib/auth-client" 
import Image from 'next/image'


const page = () => {
     const { 
        data: session, 
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession() 


    const UserData = session?.user;
  return (
    <div>
        {/* <Image href={UserData.image}></Image> */}

        <h2>{UserData?.name}</h2>
    </div>
  )
}

export default page