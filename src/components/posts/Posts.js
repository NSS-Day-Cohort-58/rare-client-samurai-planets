import { Link } from "react-router-dom"
import "./Posts.css"

export const Posts = ({ id, title, publicationDate, content, category }) => {
    return <section className="Post" >
        <div>Name:<Link to={`/posts/${id}`}> {title}</Link></div>
        <aside> It's from the {category} category. Here are my thoughts: {content} </aside>
        <footer> It was posted on {publicationDate}</footer>
    </section>
}
