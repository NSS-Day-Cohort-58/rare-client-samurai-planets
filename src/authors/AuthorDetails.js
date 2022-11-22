import { useEffect } from "react"

export const AuthorDetails = () => {
    const [author, setAuthor] = useState({})

    const { authorId } = useParams()

    useEffect (() => {
        fetch(`http://localhost:8000/authors/${authorId}`)
            .then(response => response.json())
            .then((data) => {
                setAuthor(data)
            })
    }
    , [])

    return (
        <>
            <h1>Author Details</h1>
            <section className="author">
                <h3 className="author__name">{author.name}</h3>
                <div className="author__bio">{author.bio}</div>
            </section>
        </>
    )
}