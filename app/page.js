"use client"

import { Suspense } from "react";
import NavBar from "./components/navBar";
import HomePosts from "./layouts/homePosts";
import UserPosts from "./layouts/userPosts";
import { jwtDecode } from "jwt-decode"
import { getCookie } from "cookies-next"
import { useEffect, useState } from "react"
import { redirect } from "next/navigation";

const Home = () => {

  const [userLogin, setUserLogin] = useState([])
  const [token, setToken] = useState("")


  if (userLogin.id != undefined) {
    redirect("/user/blog")
  }

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
      <HomePosts />
    </div>
  );
}

export default Home