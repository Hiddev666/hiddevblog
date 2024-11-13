"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {

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
            <div className="w-full h-screen flex flex-col sm:flex-row justify-between items-center">
                <div className="w-full sm:w-1/2  h-screen flex justify-center items-center">
                    <Image
                        src="/login.svg"
                        width={600}
                        height={600}
                        alt="Picture of the author"
                    />
                </div>
                <div className="w-full sm:w-1/2 flex justify-center">
                    <div>
                        <div className='w-4/5 sm:w-3/5'>
                            <h1 className="text-4xl font-normal mb-5">hiddev<span className="font-bold">blog.</span></h1>
                        </div>
                        <form onSubmit={savePost}>
                            <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                            <br />
                            <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <br />
                            <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <br />
                            <button type='submit' className='bg-neutral-800 px-3 py-1'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register