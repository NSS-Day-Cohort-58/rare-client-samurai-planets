import { Link } from "react-router-dom"
import "./Posts.css"

export const Posts = ({ id, title, publicationDate, content, category, author1, author2, tags }) => {
    return <section>
        <div><Link to={`/posts/${id}`}> {title}</Link></div>
        <div>{author1} {author2}</div>
        <div>{publicationDate}</div>
        <div>{category}</div>
        <div>{tags}</div>
    </section>
}

// posts.map(post => <Posts
//     id={post.id}
//     title={post.title}
//     publicationDate={post.publication_date}
//     content={post.content}
//     category={post.category?.label}
// />
// )



