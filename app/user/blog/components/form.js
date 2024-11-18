import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import axios from "axios"

const BlogForm = () => {

    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [body, setBody] = useState("")
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories();
    }, [])

    const [preview, setPreview] = useState("invisible")

    const setPreviewStatus = () => {
        if (preview != "invisible") {
            setPreview("invisible")
        } else {
            setPreview("visible")
        }
    }

    const getCategories = async () => {
        await axios.get(`https://api-hiddevblog.vercel.app/api/categories`)
            .then(res => {
                const post = res.data;
                setCategories(post.data)
            })
    }

    const test = () => {
        const titlearea = document.getElementById("titlearea")
        const bodyarea = document.getElementById("bodyarea")
        bodyarea.style.height = "1px"
        bodyarea.style.height = (25 + bodyarea.scrollHeight) + "px"
        titlearea.style.resize = "none"
        titlearea.style.height = "1px"
        titlearea.style.height = (1 + titlearea.scrollHeight) + "px"
    }

    return (
        <>
            <div className="px-10 sm:px-20 py-8">
                <form className="w-full">
                    <div className="w-full gap-2 justify-between flex flex-col">
                        <div className="w-full flex flex-col justify-between">
                            <div className="flex flex-col w-full sm:w-3/5 gap-2">
                                <textarea
                                    className="p-2 focus:outline-none font-bold text-4xl text-wrap overflow-hidden h-min"
                                    onKeyUp={test}
                                    id="titlearea"
                                    rows="1"
                                    placeholder="Add Title"
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="px-2 flex flex-col w-max gap-2">
                                <div className="p-1 rounded-md bg-neutral-800 text-white text-xs">
                                    <select id="countries" className="w-full bg-neutral-800" onChange={(e) => setCategory(e.target.value)}>
                                        <option selected disabled>Select your blog category</option>
                                        {categories.map((cat) => (
                                            <option key={cat._id} value={cat.name}>{cat.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-2 mt-3">
                            <textarea
                                className="p-2 focus:outline-none text-wrap overflow-hidden h-min"
                                onKeyUp={test}
                                id="bodyarea"
                                rows="1"
                                placeholder="Click and write your blog here ..."
                                onChange={(e) => setTitle(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="w-full flex flex-col-reverse sm:flex-row gap-3 mt-3">
                            <Link href={"/user/blog"} className="w-full sm:w-1/6 bg-white">
                                <button className="px-2 py-2 w-full text-neutral-800 rounded-md bg-neutral-300 font-medium">Cancel</button>
                            </Link>
                            <button className="bg-neutral-800 px-2 py-2 w-full sm:w-1/6 text-white bg-neutral-800 font-medium rounded-md">Upload Now</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default BlogForm