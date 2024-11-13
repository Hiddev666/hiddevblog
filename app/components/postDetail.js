import Image from "next/image"
import Link from "next/link"

const PostDetail = (props) => {
    return (
        <div className="px-10 py-11 flex justify-center">
            <div className=" w-full sm:w-3/5">
                <h1 className="text-5xl font-bold">{props.title}</h1>
                <div className="flex flex-col mt-2 gap-1">
                    <div className="flex gap-3 items-center mt-2">
                        <div className="w-max py-1 rounded-md text-white text-sm flex justify-between gap-2">
                            <Image
                                src={"/calendar.svg"}
                                width={15}
                                height={15}
                                alt="user"
                            />
                            <p className="text-neutral-800">{props.createdAt}</p>
                        </div>
                        <div className="w-max py-1 rounded-md text-white text-sm flex justify-between gap-2">
                            <Image
                                src={"/user-icon-black.svg"}
                                width={15}
                                height={15}
                                alt="user"
                            />
                            <p className="text-neutral-800">{props.author}</p>
                        </div>
                    </div>
                    <Link href={`/category/${props.category}`}>
                        <div className="bg-neutral-800 w-min px-3 py-1 rounded-md text-white text-sm">
                            <p>#{props.category}</p>
                        </div>
                    </Link>
                </div>
                <div className="mt-8" dangerouslySetInnerHTML={{ __html: props.body }}></div>
            </div>
        </div>
    )
}

export default PostDetail