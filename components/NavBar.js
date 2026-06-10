"use client"

import React,{useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const NavBar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)
   
  return (

    <nav className='bg-gray-900 text-white flex justify-between px-4 h-16 items-center'>
    
        <Link href="/" className='logo font-bold text-lg justify-around items-center flex'>
        <img src="./tea.webp" alt="./tea.webp" width={30} className='inline-block mr-2' />
        <span>GetMEaChai</span>
        </Link>
     
      
     
      {/* <ul className='flex justify-between gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign Up</li>
            <li>Login</li>
        </ul> */}
      <div >
        {session && <>
    
          <button id="dropdownDefaultButton" onClick={() => setShowdropdown(!showdropdown)} onBlur={()=>{ setTimeout(() => {
            setShowdropdown(false)
          }, 300); }} data-dropdown-toggle="dropdown" className="text-white mx-5 bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            Welcome {session.user.email}
            <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
          </button> 

          
          <div id="dropdown" className={`z-10 ${showdropdown?"block":"hidden"}  absolute top-15 right-30 border border-[1px] bg-slate-900 shadow-lg w-44`}>
            <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/dashboard" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</Link>
              </li>
              <li>
                <Link href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Your Page</Link>
              </li>
             
              <li>
                <Link href="#" onClick={()=>{signOut()}}  className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</Link>
              </li>
            </ul>
          </div>
        </>
        }

       
        {session && <Link href="/dashboard">
          <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5" onClick={() => { signOut() }} >Logout</button>
        </Link>}

        {!session &&
          <Link href="/login">
            <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5" >Login</button>
          </Link>}
      </div>
    </nav>
  )
}

export default NavBar