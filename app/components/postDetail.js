const PostDetail = (props) => {
    return (
        <div className="px-10 py-11 flex justify-center">
            <div className=" w-full sm:w-3/5">
                <h1 className="text-5xl font-bold">{props.title}</h1>
                <div className="flex items-center mt-4 gap-3">
                    <div className="bg-neutral-800 w-min px-3 py-1 rounded-md text-white text-sm">
                        <p>{props.category}</p>
                    </div>
                    <p className="font-medium">{props.createdAt}</p>
                </div>
                <div className="mt-8" dangerouslySetInnerHTML={{ __html: props.body }}></div>
            </div>
        </div>
    )
}

export default PostDetail