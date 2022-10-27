import { useRef, useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Posts.css"

export const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(
        () => {
            return fetch(`http://localhost:8088/posts`)
                .then(response => response.json())
                .then((postArray) => {
                    setPosts(postArray)
                })
        }, [])

    const getAllPosts = () => {
        return fetch(`http://localhost:8088/posts`)
            .then(response => response.json())
            .then((postArray) => {
                setPosts(postArray)
            })
    }
    return <>
        <h1>Posts:</h1>
        <article className="postList">
            {
                posts.map(
                    (post) => {
                        return <section className="postContainer" key={`post--${post.id}`}>
                            <header>{post.title} is {post.approved} </header>
                            <body> It's a {post.category.id} and {post.content} </body>
                            <footer> by {post.user_id} on {post.publication_date} </footer>
                        </section>
                    }
                )
            }
        </article>
    </>
}