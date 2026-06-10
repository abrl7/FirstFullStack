"use client"
import React, { useEffect,useState} from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const Dashboard = () => {
    const { data: session } = useSession()
    const router = useRouter()
    const [form, setform] = useState({})


    useEffect(() => {
        if (!session) {
            router.push("/login")
        }
    }, [router, session])

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
        
    }
    return (
        <>
            <div className='container w-[50vw] mx-auto'>
                <div className='flex  flex-col justify-center items-center gap-4'>
                    <h2 className='font-bold text-2xl py-5'>Welcome to your Dashboard</h2>

                    <div className='flex w-full flex-col gap-2'>
                        <label className='w-full' htmlFor="name">Name</label>
                        <input value={form.name?form.name:""} onChange={handleChange} name='name' id='name' className='bg-slate-800 w-full rounded-lg p-2' type="text" />
                    </div>

                    <div className='flex w-full flex-col gap-2'>
                        <label className='w-full' htmlFor="email">Email</label>
                        <input value={form.email?form.email:""} onChange={handleChange} name='email' id='email' className='bg-slate-800 w-full rounded-lg p-2' type="text" />
                    </div>

                    <div className='flex w-full flex-col gap-2'>
                        <label className='w-full' htmlFor="username">Username</label>
                        <input value={form.username?form.username:""} onChange={handleChange} name='username' id='username' className='bg-slate-800 w-full rounded-lg p-2' type="text" />
                    </div>

                    <div className='flex w-full flex-col gap-2'>
                        <label className='w-full' htmlFor="profile">Profile Picture</label>
                        <input value={form.profile?form.profile:""} onChange={handleChange} name='profile' id='profile' className='bg-slate-800 w-full rounded-lg p-2' type="text" />
                    </div>

                    <div className='flex w-full flex-col gap-2'>
                        <label className='w-full' htmlFor="cover">Cover Picture</label>
                        <input value={form.cover?form.cover:""} onChange={handleChange} name='cover' id='cover' className='bg-slate-800 w-full rounded-lg p-2' type="text" />
                    </div>

                    <div className='flex w-full flex-col gap-2'>
                        <label className='w-full' htmlFor="credentialsID">Payment ID</label>
                        <input value={form.payID?form.payID:""} onChange={handleChange} name='payID' id='payID' className='bg-slate-800 w-full rounded-lg p-2' type="text" />
                    </div>

                    <div className='flex w-full flex-col gap-2'>
                        <label className='w-full' htmlFor="credentialsSEC">Payment Secret</label>
                        <input value={form.paySEC?form.paySEC:""} onChange={handleChange} name='paySEC' id='paySEC' className='bg-slate-800 w-full rounded-lg p-2' type="text" />
                    </div>

                    <div className='flex w-full flex-col gap-2'>
                        <button type="button" className="text-white rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Save</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Dashboard