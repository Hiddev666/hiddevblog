"use client"

import { Suspense } from "react";
import NavBar from "../../components/navBar";
import HomePosts from "../../layouts/homePosts";
import UserPosts from "../../layouts/userPosts";
import { jwtDecode } from "jwt-decode"
import { getCookie } from "cookies-next"
import { useEffect, useState } from "react"
import Image from "next/image";
import Link from "next/link";

const MyBlogs = () => {

  const [token, setToken] = useState("")
  const [userLogin, setUserLogin] = useState([])

  useEffect(() => {
    getCook();
  }, [])

  const getCook = async () => {
    const jwt = await getCookie("token")
    if (jwt != undefined) {
      const jwtDecoded = jwtDecode(jwt)
      setUserLogin(jwtDecoded)
    }
    setToken(jwt)
  }

  const MyPosts = () => {
    if (token != undefined) {
      return (
        <UserPosts username={userLogin.username} />
      )
    }
  }

  
return (
  <div>
    <NavBar username={userLogin.username} token={token} />
    <MyPosts />
  </div>
);
}

export default MyBlogs