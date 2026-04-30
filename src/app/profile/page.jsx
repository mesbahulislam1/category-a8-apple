"use client"
import React from 'react'
import { authClient } from "@/lib/auth-client" 
import Image from 'next/image'
import { FaEdit } from 'react-icons/fa'
import {Button} from "@heroui/react";

const page = () => {
     const { 
        data: session, 
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession() 


    const UserData = session?.user;
  return (
    <div className='shadow-xl card mt-8 text-center w-fit p-7 border border-black/50'>
      <p>{UserData?.email}</p>
       {UserData?.image && (
      <Image
        src={UserData.image}
        alt="Profile"
        width={100}
        height={100}
        className="rounded-full mx-auto"
      />
    )}
        <h2 className='text-2xl font-medium'>{UserData?.name}</h2>
        <div className='text-center'>
          <Button variant='outline' className=''><FaEdit></FaEdit> Edit Profile</Button>
        </div>
    </div>
  )
}

export default page