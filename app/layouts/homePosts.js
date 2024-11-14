"use client"

import PostCard from "../components/postCard"
import dateFormat from "dateformat"
import axios from "axios"
import { useEffect, useState } from "react"
import { getCookie } from "cookies-next"
import { jwtDecode } from "jwt-decode"


const HomePosts = () => {

    const [posts, setPost] = useState([])

    const [token, setToken] = useState([])


    useEffect(() => {
        getPosts();
        getCook();
    }, [])

    const getCook = async () => {
        const jwt = await getCookie("token")
        setToken(jwt)
    }

    const getPosts = async () => {
        await axios.get("https://api-hiddevblog.vercel.app/api/posts")
            .then(res => {
                const post = res.data;
                setPost(post.data)
            })
    }


    return (
        <div className="px-10 py-8 flex flex-col gap-3">
            <h4 className="font-medium text-xl">All Blogs.</h4>
            <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-4">
                {posts.map((post) => (
                    <PostCard
                        key={post._id}
                        title={post.title}
                        body="Lorem Ipsum Dolor Sit Amet"
                        createdAt={dateFormat(post.createdAt, "mmm dS, yyyy")}
                        url={`/post/${post.slug}`}
                        category={post.category.name}
                        author={post.author.username}
                    />
                ))}
            </div>
        </div>
    )
}

export default HomePosts