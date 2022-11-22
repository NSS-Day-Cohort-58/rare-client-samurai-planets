import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getAllAuthors, getAuthorById } from "../managers/AuthorManager"

export const AuthorList = () => {
    const [authors, setAuthors] = useState([])

    
    const { authorId } = useParams()
    
    const updateAuthorList = () => {
        getAllAuthors().then(setAuthors)
    }

    useEffect(() => {
        updateAuthorList()
    }, [])


    return <>
        <h1>Author List</h1>
        <section className="authors">
            {
                authors.map(author => {
                    return <div className="author">
                        <h3 className="author__name">Username: {author?.user?.username}</h3>
                        <div className="full_name">Name: <Link to={`/authors/${author.id}`}>{author.full_name}</Link></div>
                        <div className="author_email">Email: {author?.user?.email}</div>
                    </div>
                })
            }
        </section>
    </>
}


