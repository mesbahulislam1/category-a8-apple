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
       {UserData?.image && (
      <Image
        src={UserData.image}
        alt="Profile"
        width={100}
        height={100}
        className="rounded-full"
      />
    )}
        <h2 className='text-2xl font-medium'>{UserData?.name}</h2>
    </div>
  )
}

export default page