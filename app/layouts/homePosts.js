import PostCard from "../components/postCard"
import dateFormat from "dateformat"


const HomePosts = async () => {
    let data = await fetch("https://hiddevblog-api.vercel.app/api/posts")
    let postsJson = await data.json()
    let posts = postsJson.data
    const createdAt = posts.createdAt


    return (
        <div className="px-10 py-8 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-4">
            {posts.map((post) => (
                <PostCard key={post._id} title={post.title} body="Lorem Ipsum Dolor Sit Amet" createdAt={dateFormat(post.createdAt, "mmm dS, yyyy, h:MM TT")} url={`/post/${post.slug}`}/>
            ))}
        </div>
    )
}

export default HomePosts