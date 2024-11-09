import NavBar from "@/app/components/navBar"
import PostCard from "@/app/components/postCard"
import PostDetail from "@/app/components/postDetail"
import dateFormat from "dateformat"

const Post = async ({ params }) => {
  const slug = (await params).slug
  let data = await fetch(`https://hiddevblog-api.vercel.app/api/posts/${slug}`)
  let postsJson = await data.json()
  let posts = postsJson.data[0]

  const createdAt = posts.createdAt
  const formatedCreatedAt = dateFormat(createdAt, "mmm dS, yyyy, h:MM TT")


  return (
    <>
      <NavBar />
      <PostDetail title={posts.title} createdAt={formatedCreatedAt} category={posts.category.name} body={posts.body}/>
    </>
  );
}

export default Post