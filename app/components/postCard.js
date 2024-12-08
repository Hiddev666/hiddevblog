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
        <div className="p-2 pb-5 border-b flex flex-col justify-between">
            <div>
                <div className="w-max py-1 rounded-md text-white text-sm flex justify-between items-center gap-2">
                    <p>&#128193;</p>
                    <div>
                        <p className="text-neutral-800 text">In {props.category} by {props.author}</p>
                    </div>
                </div>
                <a href={props.url}>
                    <h5 className="mt-2 text-2xl font-bold tracking-tight text-neutral-800 leading-7">{props.title}</h5>
                </a>
                <div className="flex gap-3 items-center mt-2">
                    <div className="w-max py-1 rounded-md text-white text-xs flex justify-between gap-2">
                        <p>&#128197;</p>
                        <p className="text-neutral-800">{props.createdAt}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard