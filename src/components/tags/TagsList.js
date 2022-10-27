import { useEffect, useState } from "react"
import { Tags } from "./Tags"


export const TagsList = () => {
    const [tags, setTags] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8088/tags`)
            .then(response => response.json())
            .then((tagArray) => {
                setTags(tagArray)
            })
    }, [])

    const willDelete = (tags) => {
        const copy = {
            label: tags.label
        }
        return fetch(`http://localhost:8088/tags/${tags.id}`, {
            method: "DELETE",
        })
            .then(response => response.json())
            .then(() => {
                fetch(`http://localhost:8088/tags`)
                    .then(response => response.json())
                    .then((tags) => {
                        setTags(tags)
                    })
            })
    }

    return <article className="tagList">
        {

            tags.map(tag => <Tags
                id={tag.id}
                label={tag.label}
            />)

        }
    </article>
}