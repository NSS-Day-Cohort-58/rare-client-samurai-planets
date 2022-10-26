import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./posts.css"
export const PostDetails = () => {
    const { postId } = useParams()
    const [post, updatePost] = useState({})

    useEffect(
        () => {
            fetch(`http://localhost:8088/posts?_expand=user&userId=${postId}`)
                .then(response => response.json())
                .then((data) => {
                    const singlePost = data[0]
                    updatePost(singlePost)
                })
        },
        [postId]
    )

    return <section className="post" >
        <header className="post__header">{post?.user?.fullName}</header>
        <div>Email: {post?.user?.email} </div>
        <div>Contact: {post.phoneNumber} </div>
        <div>Habitat: {post.address} </div>
        <footer className="post__footer"></footer>
    </section>
}