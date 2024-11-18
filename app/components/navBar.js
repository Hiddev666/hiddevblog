"use client"

import Link from "next/link"
import Image from 'next/image'
import { useEffect, useState } from "react"
import { redirect, useRouter } from 'next/navigation'
import { deleteCookie } from "cookies-next"
import axios from "axios";
import { getCookie } from "cookies-next";

const NavBar = (props) => {

    const [status, setStatus] = useState("invisible")
    const router = useRouter();

    const setTrue = () => {
        if (status != "invisible") {
            setStatus("invisible")
        } else {
            setStatus("visible")
        }
    }

    const AuthDropDown = () => {

        return (
            <div>
                <button onClick={setTrue}>
                    <div className="flex items-center justify-between gap-2">
                        <p>@{props.username}</p>

                        <div className="w-100 h-100 bg-neutral-800 p-2 rounded-3xl">
                            <Image
                                src={"/user-icon.svg"}
                                width={20}
                                height={20}
                                alt="User Profile"
                            />
                        </div>
                    </div>
                </button>

                <div className={`bg-white border rounded-md absolute top-16 right-10 w-60 p-2 pt-4 ${status} font-medium z-10`}>
                    <Link href={"/user/blog"}>
                        <div className="p-3">
                            <p className="">My Blogs</p>
                        </div>
                    </Link>
                    <hr />
                    <Link href={"/logout"}>
                        <button className="p-2 flex justify-between items-center w-full">
                            <p className="font-normal">Logout</p>
                            <Image
                                src={"/sign-out.svg"}
                                width={20}
                                height={20}
                                alt="sign out"
                            />
                        </button>
                    </Link>
                </div>
            </div>
        )
    }

    const LoginButton = () => {
        if (props.token === undefined) {
            return (
                <div>
                    <Link href={"/login"}>
                        <button className="px-5 py-2 rounded  font-medium">Login</button>
                    </Link>
                    <Link href={"/register"}>
                        <button className="bg-neutral-800 text-white px-5 py-2 rounded-3xl font-medium hover:bg-slate-700">Get Started</button>
                    </Link>
                </div>
            )
        } else {
            return (
                <>
                    <AuthDropDown />
                </>
            )
        }
    }

    const UserNavbar = () => {
        if (props.username != undefined) {
            return (
                <div className="w-full px-10 sticky top-0 bg-gray-50">
                    <div className="border-b py-2 px-5 gap-3 flex">
                        <Link href={"/user/blog/create"}>
                            <div className="p-1 w-fit text-sm font-medium rounded-full flex gap-1 hover:bg-gray-100">
                                <Image
                                    src={"/add.svg"}
                                    width={20}
                                    height={20}
                                    alt="write"
                                />
                                <p>Create A Blog</p>
                            </div>
                        </Link>
                        <div className="p-1 w-fit text-sm rounded-full flex gap-2">
                            <p>Followings</p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <>
            <div className="w-full bg-white px-10 py-5 border-b flex justify-between items-center">
                <Link href="/">
                    <h2 className="text-2xl font-normal text-neutral-800">hiddev<span className="font-bold">blog.</span></h2>
                </Link>
                <LoginButton />
            </div>
            <UserNavbar/>
        </>
    )
}

export default NavBar