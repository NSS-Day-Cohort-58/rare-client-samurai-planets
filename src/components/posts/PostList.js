import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Post } from "./Posts"
import "./posts.css"

export const PostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8088/posts`)
            .then(response => response.json())
            .then((postArray) => {
                setPosts(postArray)
            })
    }, [])

    return <>
        <h1>Posts:</h1>
        <article className="postList">
            {
                posts.map(
                    (post) => {
                < section className="Post" >
                    <div><Link to={`/Posts/${post.id}`}>Name: {post.title}</Link></div>
                    <aside> It's from the {post.category?.label} category and "{post?.content}" </aside>
                    <footer> Posted by {post?.user?.first_name} {post?.user?.last_name} on {post?.publication_date} </footer>
                    <div>Title: { }</div>
                </section>
            }
            )
            }
        </article>
    </>

}




// import { useRef, useState, useEffect } from "react"
// import { Link, useNavigate } from "react-router-dom"

// export const Posts = () => {
//     const [posts, setPosts] = useState([])

//     useEffect(
//         () => {
//             fetch(`http://localhost:8088/posts`)
//                 .then(response => response.json())
//                 .then((postArray) => {
//                     setPosts(postArray)
//                 })
//         }, []
//     )

//     const getAllPosts = () => {
//         fetch(`http://localhost:8088/posts`)
//             .then(response => response.json())
//             .then((postArray) => {
//                 setPosts(postArray)
//             })
//     }
//     return <>
//         <h1>Posts:</h1>
//         <article className="postList">
//             {
//                 posts.map(
//                     (post) => {
//                         return <section className="postContainer" key={`post--${post.id}`}>
//                             <header>
//                                 <Link to={`/post/${post.id}`}> {post.title} </Link>
//                             </header>
//                             <aside> It's from the {post?.category.label} category and "{post.content}" </aside>
//                             <footer> Posted by {post?.user.first_name} {post?.user.last_name} on {post.publication_date} </footer>
//                         </section>
//                     }
//                 )
//             }
//         </article>
//     </>
// } 