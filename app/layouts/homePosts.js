"use client"

import PostCard from "../components/postCard"
import dateFormat from "dateformat"
import axios from "axios"
import { useEffect, useState } from "react"


const HomePosts = () => {

    const [posts, setPost] = useState([])

    useEffect(() => {
        getPosts();
    }, [])

    const getPosts = async () => {
        await axios.get("https://api-hiddevblog.vercel.app/api/posts")
            .then(res => {
                const post = res.data;
                setPost(post.data)
            })
    }

    
    return (
        <div className="px-10 py-8 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-4">
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
    )
}

export default HomePosts