import { Link } from "react-router-dom"
import "./users.css"

export const Users = ({ id, title, publicationDate, content, category, author1, author2, tags }) => {
    return <section>
        <div><Link to={`/users/${id}`}> {title}</Link></div>
        <div>{author1} {author2}</div>
        <div>{publicationDate}</div>
        <div>{category}</div>
        <div>{tags}</div>
    </section>
}



