"use client"
import React from 'react'
import { authClient } from "@/lib/auth-client" 
import Image from 'next/image'
import UpdateUser from '@/components/ui/UpdateUser'

const page = () => {
     const { 
        data: session, 
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession() 


    const UserData = session?.user;
  return (
    <div className='h-[50vh]'>
    {
      UserData && <div className='shadow-xl card mx-auto mt-8 text-center w-fit p-7 border border-black/50'>
      <p>{UserData?.email}</p>
       {UserData?.image && (

        <Image
        src={UserData.image}
        alt="Profile"
        width={500}
        height={500}
        className="rounded-full w-[100px] object-cover h-[100px] mx-auto"
      />

    )}
        <h2 className='text-2xl font-medium'>{UserData?.name}</h2>
        <div className='text-center'>
           <UpdateUser></UpdateUser>
        </div>
    </div>
    }
    </div>
  )
}

export default page