import Link from "next/link"
import { useState } from "react"

const BlogForm = () => {

    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [body, setBody] = useState("")

    return (
        <div className="px-10 sm:px-20 py-8">
            <div className="text-wrap">
                <h2 className="font-bold text-4xl text-wrap">{title || "Type Your Blog Title"}</h2>
                <div className="bg-neutral-800 w-max px-2 py-1 rounded-md text-white font-medium text-xs mt-2">
                    <p>{category || "Select Your Blog Category"}</p>
                </div>
            </div>
            <form className="w-full mt-8">
                <div className="w-full gap-5 justify-between flex flex-col">
                    <div className="w-full flex flex-col sm:flex-row justify-between gap-4 sm:gap-2 sm:gap-5">
                        <div className="flex flex-col w-full sm:w-3/5 gap-2">
                            <input
                                type="text"
                                className="px-4 py-3 ps-5 py-2 rounded-md border border-slate-400"
                                placeholder="Type your blog title"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col w-full sm:w-2/5 gap-2">
                            <div className="px-4 py-3 ps-5 py-2 rounded-md border border-slate-400 text-slate-500">
                                <select id="countries" className="w-full bg-white" onChange={(e) => setCategory(e.target.value)}>
                                    <option selected disabled>Select your blog category</option>
                                    <option value={"Entertainment"}>Entertainment</option>
                                    <option value={"College"}>College</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <textarea
                            type="text"
                            className="w-full px-4 py-3 pt-5 ps-5 rounded-md border border-slate-400 h-60"
                            placeholder="Write your blog here ..."
                        ></textarea>
                    </div>
                    <div className="w-full flex flex-col-reverse sm:flex-row gap-3 mt-3">
                        <Link href={"/user/blog"} className="w-full sm:w-1/6 bg-white">
                            <button className="px-4 py-3 w-full text-neutral-800 rounded-md bg-neutral-300 font-medium">Cancel</button>
                        </Link>
                        <button className="bg-neutral-800 px-4 py-3 w-full sm:w-1/6 text-white bg-neutral-800 font-medium rounded-md">Upload Now</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default BlogForm