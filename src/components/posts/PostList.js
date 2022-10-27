import { useEffect, useState } from "react"
import { Posts } from "./Posts"

export const PostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8088/posts`)
            .then(response => response.json())
            .then((postArray) => {
                setPosts(postArray)
            })
    }, [])

    return <article className="postList">
        {

            posts.map(post => <Posts
                id={post.id}
                title={post.title}
                publicationDate={post.publication_date}
                content={post.content}
                category={post.category?.label}
            />
            )

        }
    </article>
}




