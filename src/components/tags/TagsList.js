import { useEffect, useState } from "react"
import { getAllTags, createTag, deleteTag } from "../../managers/TagManager"
import "./Tags.css"

export const TagsList = () => {
    const [tags, setTags] = useState([])

    const [currentTag, setCurrentTag] = useState({
        label: ""
    })

    const updateTagList = () => {
        getAllTags().then(setTags)
    }

    useEffect(() => {
        updateTagList()
    }, [])

    const changeTagState = (event) => {
        const copy = { ...currentTag }
        copy[event.target.id] = event.target.value
        setCurrentTag(copy)
    }

    return <article className="grid">
        <header>
            <h1>Tags</h1>
        </header>
        <section className="tags">
            {
                tags.map(tag => {
                    return <>
                        <section key={`tag--${tag.id}`} className="tag">
                            <div className="tag__name">{tag.label}</div>
                            <button className="tag__delete"
                                onClick={() => {
                                    deleteTag(tag)
                                        .then(updateTagList)
                                }}
                            >🗑</button>
                        </section>
                    </>
                })
            }
            <fieldset >
                <div className="tag" >
                    <label htmlFor="label">Tag Name:</label>
                    <input
                        type="text"
                        id="label"
                        name="tag__name"
                        required autoFocus
                        className="form-control"
                        placeholder="Tag Name"
                        onChange={changeTagState}
                    />
                </div>
                <button type="submit"
                    onClick={evt => {
                        evt.preventDefault()

                        const tag = {
                            label: currentTag.label
                        }

                        createTag(tag)
                            .then(() => {
                                updateTagList()
                            })
                    }}
                    className="tag__create">Create Tag</button>
            </fieldset>
        </section>

    </article>
}