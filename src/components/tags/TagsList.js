import { useEffect, useState } from "react"
import { Tags } from "./Tags"
import "./Tags.css"

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
        <table className="minimalist">
            <thead>
                <tr>
                    <th>Tags</th>
                </tr>
            </thead>
            {
                tags.map(tag =>
                    <Tags
                        key={`tags--${tag.id}`}
                        id={tag.id}
                        label={tag.label}
                    />
                )


            }
        </table>
    </article>
}