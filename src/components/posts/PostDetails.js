import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import "./Posts.css"

export const PostDetails = () => {
    const { postId } = useParams()
    const [post, updatePost] = useState()

    useEffect(
        () => {
            fetch(`http://localhost:8000/posts/${postId}`)
                .then(response => response.json())
                .then((data) => {
                    updatePost(data)
                })
        },
        []
    )
    return <section className="post" >
        <header className="post__header"><h1>{post?.title}</h1></header>
        <div className="post_category" ><h2>{post?.category?.label}</h2></div>
        <div className="image"> <img src={post?.image_url} alt="" width="160" height="90" /> </div>
        <div>
            <div className="post_author" ><h1>By: <Link to={`/users/${post?.user.id}`}> {post?.user?.first_name} {post?.user?.last_name}</Link> </h1> </div>
            <button className="post_button">Comments</button>
        </div>
        <div>{post?.user?.bio} </div>
        <footer className="post__footer"></footer>
    </section>
}
