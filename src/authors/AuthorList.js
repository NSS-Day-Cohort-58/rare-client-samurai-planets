import { useEffect, useState } from "react"
import { getAllAuthors } from "../managers/AuthorManager"

export const AuthorList = () => {
    const [authors, setAuthors] = useState([])

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
                        <h3 className="author__name">{author.full_name}</h3>
                        <div className="author_username">{author.bio}</div>
                        <div className="author_email">{author?.user?.email}</div>
                    </div>
                })
            }
        </section>
    </>
}


