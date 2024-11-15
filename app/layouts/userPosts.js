"use client"

import PostCard from "../components/postCard"
import dateFormat from "dateformat"
import axios from "axios"
import { useEffect, useState } from "react"
import { getCookie } from "cookies-next"
import { jwtDecode } from "jwt-decode"
import Image from "next/image"
import { redirect } from "next/navigation"


const UserPosts = (props) => {

    const [posts, setPost] = useState([])

    const [token, setToken] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState()

    useEffect(() => {
        getPosts();
        getCook();
    }, [])

    const getCook = async () => {
        const jwt = await getCookie("token")
        setToken(jwt)
    }

    const getPosts = async () => {
        await axios.get(`https://api-hiddevblog.vercel.app/api/posts/user/${props.username}?page=1&limit=8`)
            .then(res => {
                const post = res.data;
                setPost(post.data)
                setTotalPages(post.pagination.pages)
            })
    }

    const previousPage = async () => {
        if (page != 1) {
            setPage(page - 1)
            await axios.get(`https://api-hiddevblog.vercel.app/api/posts/user/${props.username}?page=${page - 1}&limit=8`)
                .then(res => {
                    const post = res.data;
                    setPost(post.data)
                })
        }
    }

    const nextPage = async () => {
        if (page <= totalPages - 1) {
            setPage(page + 1)
            await axios.get(`https://api-hiddevblog.vercel.app/api/posts/user/${props.username}?page=${page + 1}&limit=8`)
                .then(res => {
                    const post = res.data;
                    setPost(post.data)
                })
        }
    }

    const Pagination = () => {
        if (totalPages != 1) {

            return (
                <div className="w-full flex justify-center items-center mt-5">
                    <div className="flex gap-3">
                        <button onClick={previousPage} className="bg-neutral-800 p-2 rounded-md flex justify-center items-center hover:bg-neutral-600">
                            <Image
                                src={"/arrow-right.svg"}
                                width={20}
                                height={20}
                                alt="arrow"
                                className="rotate-180"
                            />
                        </button>
                        <div className="px-4 py-2 rounded-md">
                            <p className="font-medium text-neutral-800">{page} of {totalPages}</p>
                        </div>
                        <button onClick={nextPage} className="bg-neutral-800 p-2 rounded-md flex justify-center items-center hover:bg-neutral-600">
                            <Image
                                src={"/arrow-right.svg"}
                                width={20}
                                height={20}
                                alt="arrow"
                            />
                        </button>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="px-10 py-8 flex flex-col gap-3">
            <h4 className="font-medium text-xl" id="blogs">All Blogs.</h4>
            <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-4">
                {posts.map((post) => (
                    <PostCard
                        key={post._id}
                        title={post.title}
                        body="Lorem Ipsum Dolor Sit Amet"
                        createdAt={dateFormat(post.createdAt, "mmm dS, yyyy")}
                        url={`/post/${post.slug}`}
                        category={post.category.name}
                    />
                ))}
            </div>
            <Pagination />
        </div>
    )
}

export default UserPosts