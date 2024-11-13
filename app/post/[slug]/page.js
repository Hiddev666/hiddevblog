"use client"

import NavBar from "@/app/components/navBar"
import PostCard from "@/app/components/postCard"
import PostDetail from "@/app/components/postDetail"
import axios from "axios"
import dateFormat from "dateformat"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const Post = () => {
  const { slug } = useParams()
  // const slug = "julukan-julukan-dosen-tekkom"

  const [posts, setPost] = useState([])

  useEffect(() => {
    getPosts();
  }, [])

  const getPosts = async () => {
    await axios.get(`https://api-hiddevblog.vercel.app/api/posts/${slug}`)
      .then(res => {
        const post = res.data;
        setPost(post.data)
      })
  }

  const createdAt = posts.createdAt
  const formatedCreatedAt = dateFormat(createdAt, "mmm dS, yyyy, h:MM TT")

  return (
    <>
      <NavBar />
      {
        posts.map(post => (
          <div key={post._id}>
            <PostDetail title={post.title} createdAt={formatedCreatedAt} body={post.body} category={post.category.name} />
          </div>
        ))
      }
    </>
  );
}

export default Post