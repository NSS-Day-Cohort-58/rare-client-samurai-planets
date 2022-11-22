import { useEffect, useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import { getPosts} from "../../managers/PostManager"

export const PostList = () => {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()

    // useEffect(() => {
    //     fetch(`http://localhost:8000/posts`)
    //         .then((postArray) => {
    //             setPosts(postArray)
    //         })
    // }, [])
    useEffect(() => {
        getPosts().then(setPosts)
    }, [])

    return <div className = "post_list"><table className="minimalistBlack">
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                {/* <th>Date</th> */}
                <th>Category</th>
                <th>Edit</th>
                <th>Delete</th>
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
                        {/* <td>{post?.image}</td> */}
                        <td><center><button className = "edit_post" onClick= {() => {
                            navigate({pathname: `/posts/${post.id}/edit`})
                        }}>Edit</button></center></td>
                        <td><center><button>Delete</button></center></td>


                    </tr>
                </tbody>
            )
        }
        
    </table>
    <button className = "create_post" onClick={() => {
        navigate({ pathname: "/post/new" })
    }}> Create a Post</button>
    </div>
}
