import { Link } from "react-router-dom"

export const Posts = ({ post, id, setToken}) => {
    return <section className="Post" >
        <div><Link to={`/Posts/${id}`}>Name: {id?.id?.title}   {post?.id} {post?.post?.id} {id?.post?.id} {id?.post} {post?.title}</Link></div>
        <aside> It's from the {post?.category?.label} category and "{post?.content}" </aside>
        <footer> Posted by {post?.user?.first_name} {post?.user?.last_name} on {post?.publication_date} </footer>
        <div>Title: {}</div>
    </section>
}
