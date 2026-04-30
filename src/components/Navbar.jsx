"use client";

import React from "react";
import Link from "next/link";
import MyLinks from "./MyLinks";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const Navbar = () => {
  // Change this to true when user logged in
  const { 
          data: session, 
          isPending, //loading state
          error, //error object
          refetch //refetch the session
      } = authClient.useSession() 
  
  
   const isLoggedIn  = session?.user;

   const LogOut = async()=>{
    await authClient.signOut();
   }
   

  return (
    <header className="w-full shadow-md bg-white">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left - Logo */}
        <div className="flex items-center">
          <Link href="/" className="font-extrabold">
            Tiles Gallery
          </Link>
        </div>

        {/* Center - Menu Links */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <MyLinks href="/">
            Home
          </MyLinks>

          <MyLinks href="/all-tiles" className="hover:text-blue-600 transition">
            All Tiles
          </MyLinks>

          <MyLinks href="/profile" className="hover:text-blue-600 transition">
            My Profile
          </MyLinks>
        </div>

        {/* Right - Auth Buttons */}
        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <Link
              href="/login"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </Link>
          ) : (
            <>
              
              <Link href={"/profile"} className="rounded-full overflow-hidden h-[40px] w-[40px] ">
                <Image src={isLoggedIn.image} width={40} height={40} alt="Image" className="object-cover "></Image>
              </Link>

              <button onClick={LogOut} className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;