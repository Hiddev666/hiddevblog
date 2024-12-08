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
        <div className="transition ease-in-out p-6 border rounded-lg flex flex-col justify-between hover:shadow-lg">
            <div>
                <a href={props.url}>
                    <h5 className="text-2xl font-bold tracking-tight text-neutral-800 leading-7">{props.title}</h5>
                </a>
                <div className="flex gap-3 items-center mt-2">
                    <div className="w-max py-1 rounded-md text-white text-xs flex justify-between gap-2">
                        <Image
                            src={"/calendar.svg"}
                            width={15}
                            height={15}
                            alt="user"
                        />
                        <p className="text-neutral-800">{props.createdAt}</p>
                    </div>
                <Author/>
                </div>
                <div className="flex gap-2 mt-1">
                    <div className="bg-blue-950 w-min px-2 py-1 rounded-md text-white font-medium text-xs">
                        <p>#{props.category}</p>
                    </div>
                </div>
            </div>
            <Link href={props.url} className="w-100">
                <div className="flex mt-10 bg-blue-950 text-sm font-medium rounded-md p-2 justify-center items-center text-white gap-1">
                    Read more
                    <Image
                        src={"/arrow-right.svg"}
                        width={20}
                        height={20}
                        alt="arrow"
                    />
                </div>
            </Link>
        </div>
    )
}

export default PostCard