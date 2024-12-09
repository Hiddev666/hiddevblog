import Link from "next/link"
import Image from "next/image"

const PostCard = (props) => {

    const Author = () => {
        if (props.author != undefined) {
            return (
                <div className="w-max py-1 rounded-md text-white text-xs flex justify-between gap-2">
                    <Image
                        src={"/user-icon-black.svg"}
                        width={15}
                        height={15}
                        alt="user"
                    />
                    <p className="text-neutral-800">{props.author}</p>
                </div>
            )
        }
    }

    return (
        <a href={props.url}>
            <div className="p-2 pb-5 border-b flex justify-between items-center">
                <div>
                    <div className="w-max py-1 rounded-md text-white text-sm flex justify-between items-center gap-2">
                        <p>&#128193;</p>
                        <div>
                            <p className="text-neutral-800 text">In {props.category} by {props.author}</p>
                        </div>
                    </div>
                    <h5 className="mt-2 text-2xl font-bold tracking-tight text-neutral-800 leading-7">{props.title}</h5>
                    <div className="flex gap-3 items-center mt-2">
                        <div className="w-max py-1 rounded-md text-white text-xs flex justify-between gap-2">
                            <p>&#128197;</p>
                            <p className="text-neutral-800">{props.createdAt}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <Link href={`/user/blog/update/${props.slug}`}>
                        <button className="p-1 px-2 border rounded-md text-sm">&#9999;&#65039;</button>
                    </Link>
                    <button className="p-1 px-2 border rounded-md text-sm">&#128465;&#65039;</button>
                </div>
            </div>
        </a>
    )
}

export default PostCard