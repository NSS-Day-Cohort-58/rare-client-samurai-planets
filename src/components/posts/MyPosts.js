import { useEffect, useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import { getPostsByAuthor, deletePost} from "../../managers/PostManager"

export const PostsAuthorList = () => {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        getPostsByAuthor().then(setPosts)
    }, [])

    const updatePostList = () => {
        getPostsByAuthor().then(setPosts)
    }

    useEffect(()=> {
        updatePostList()
    }, [])
    return <div className = "user_post_list">
        <h2> My Posts </h2>
        <table className="minimalistBlack">
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                {/* <th>Date</th> */}
                <th>Category</th>
                {/* <th>Tags</th> */}
            </tr>
        </thead>
        {
            posts?.map(post =>
                
                <tbody key={post.id} >
                    <tr>
                        <td><Link to={`/posts/${post.id}`}> {post.title}</Link></td>
                        <td> {post?.author?.user?.first_name} {post?.author?.user?.last_name}</td>
                        {/* <td>{post?.date}</td> */}
                        <td>{post?.category?.label}</td>


                    </tr>
                </tbody>
            )
        }
        
    </table>
    </div>
}
