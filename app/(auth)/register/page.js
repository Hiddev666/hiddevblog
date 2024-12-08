"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import axios from 'axios'
import NavBar from '@/app/components/navBar'

const Register = (props) => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const savePost = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://api-hiddevblog.vercel.app/api/auth/register", {
                username,
                email,
                password
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <NavBar />
            <div className="w-full top-0 flex flex-col sm:flex-row justify-center items-center py-20">
                <div className="w-full sm:w-1/2 flex flex-col items-center justify-between gap-5 bg-white">
                    <div className='w-3/5 flex flex-col items-start gap-5'>
                        <div>
                            <h1 className='text-4xl font-bold text-neutral-800'>Get Started.</h1>
                            <p className='text-neutral-700 text-sm'>Get started with fill create your account!</p>
                        </div>
                        <form onSubmit={savePost} className='flex flex-col gap-3 w-full'>
                            <input className='border w-full px-3 py-2 rounded-md' type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                            <input className='border w-full px-3 py-2 rounded-md' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input className='border w-full px-3 py-2 rounded-md' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button className='mt-3 bg-blue-950 text-white font-semibold w-full px-3 py-3 rounded-lg' type='submit'>Register</button>
                        </form>
                        <div className='w-full flex justify-center items-center'>
                            <p className='text-center'>Already have an account? <a href='/login' className='font-bold text-blue-950'>Login</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register