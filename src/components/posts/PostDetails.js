import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { getPost } from "../../managers/PostManager"
import "./Posts.css"

export const PostDetails = () => {
    const { postId } = useParams()
    const [post, updatePost] = useState()

    useEffect(() => {
        getPost(postId).then(updatePost)
    }, [postId])

    return <>
    <section className="post" >
        <header className="post__header"><h1>{post?.title}</h1></header>
        <div className="image"> <img src={post?.image} alt="" width="160" height="90" /> </div>
        <div className="post_content" >{post?.content}</div>
        <div className="post_categories" > Category: {post?.category?.label}</div>
        <div className="post_date" > Date Created: {post?.date}</div>
        <div className="post_author" ><h1>By: <Link to={`/authors/${post?.author?.user?.id}`}>{post?.author?.user?.first_name} {post?.author?.user?.last_name} </Link> </h1> </div>
        <button className="post_button">Comments</button>
        <div> </div>
        <footer className="post__footer"></footer>
    </section>
    </>
}
