import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getAuthorById } from "../managers/AuthorManager"

export const AuthorDetails = () => {
    const [author, setAuthor] = useState({})

    const { authorId } = useParams()

    useEffect(
        () => {
            getAuthorById(authorId)
                .then((data) => {
                    setAuthor(data)
                })
        },
        [authorId]
    )

    return (
        <>
            <h1>Author Details</h1>
            <section className="author">
                <h3 className="author__name">{author.full_name}</h3>
                <img src={author.img} alt="" width="160" height="90" /> 
                <div className="author_username">{author?.user?.username}</div>
                <div className="author__date_created">{author?.user?.date_joined}</div>
                <div className="author__bio">{author.bio}</div>

            </section>
        </>
    )
}