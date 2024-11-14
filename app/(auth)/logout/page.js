"use client"

import { deleteCookie } from "cookies-next";
import { redirect } from 'next/navigation';
import { useRouter } from "next/navigation";


const Logout = () => {
    deleteCookie("token")
    redirect("/")
}

export default Logout