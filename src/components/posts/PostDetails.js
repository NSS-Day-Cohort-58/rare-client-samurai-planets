import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export const PostDetails = () => {
const { postId } = useParams()
    const [post, updatePost] = useState({})

    useEffect(
        () => {
            fetch(`http://localhost:8088/posts/${postId}`)
                .then(response => response.json())
                .then((data) => {
                    const singlePost = data[0]
                    updatePost(singlePost)
                })
        },
        [postId]
    )

    return <section className="post" >
        <header className="post__header">{post?.title}</header>
        <div>Author: {post?.user?.first_name} {post?.user?.last_name}  </div>
        <div>Category: {post?.category?.label} </div>
        <div>Publishing Date: {post?.publication_date} </div>
        <div>Content: {post?.content} </div>
        <footer className="post__footer"></footer>
    </section>
}
