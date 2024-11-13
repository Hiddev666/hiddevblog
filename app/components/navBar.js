"use client"

import Link from "next/link"
import { getCookie } from "cookies-next"
import { useEffect, useState } from "react"
import Image from 'next/image'


const NavBar = () => {

    const [token, setToken] = useState("")

    useEffect(() => {
        getCook();
    }, [])

    const getCook = async () => {
        const jwt = await getCookie("token")
        setToken(jwt)
    }

    const LoginButton = ({ jwt, isLogin }) => {
        if (token === undefined) {
            return <button className="hover:bg-neutral-800 hover:text-white px-5 py-2 rounded  font-bold">Login</button>
        } else {
            return <div className="w-100 h-100 bg-neutral-800 p-2 rounded-3xl">
                <Image
                    src={"/user-icon.svg"}
                    width={20}
                    height={20}
                    alt="User Profile"
                />
            </div>
        }
    }

    return (
        <div className="w-full px-10 py-5 border-b flex justify-between items-center">
            <Link href="/">
                <h2 className="text-2xl font-normal text-neutral-800">hiddev<span className="font-bold">blog.</span></h2>
            </Link>
            <Link href="/login">
                <LoginButton />
            </Link>
        </div>
    )
}

export default NavBar