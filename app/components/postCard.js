import Link from "next/link"

const PostCard = (props) => {
    return (
        <div className="p-6 border rounded-lg">
            <a href="#">
                <h5 className="text-2xl font-bold tracking-tight text-neutral-800">{props.title}</h5>
            </a>
            <p className="text-sm text-neutral-800">{props.createdAt}</p>
            <div className="flex items-center justify-between mt-10">
                <Link href={props.url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
                <div className="bg-neutral-800 w-min px-3 py-1 rounded-md text-white font-medium text-sm">
                    <p>College</p>
                </div>
            </div>
        </div>
    )
}

export default PostCard