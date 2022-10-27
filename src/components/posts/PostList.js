import { useEffect, useState } from "react"
import { Posts } from "./Posts"
import { Link } from "react-router-dom"

export const PostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8088/posts`)
            .then(response => response.json())
            .then((postArray) => {
                setPosts(postArray)
            })
    }, [])

    return <table className="minimalistBlack">
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Date</th>
                <th>Category</th>
                <th>Tags</th>
            </tr>
        </thead>
        {
            posts.map(post =>
                <tbody key={post.id} >
                    <tr>
                        <td><Link to={`/posts/${post.id}`}> {post.title}</Link></td>
                        <td>{post.user.first_name} {post.user.last_name}</td>
                        <td>{post.publication_date}</td>
                        <td>{post.category.label}</td>
                        <td>{post.tags}</td>
                    </tr>
                </tbody>
            )
        }
    </table>
}
