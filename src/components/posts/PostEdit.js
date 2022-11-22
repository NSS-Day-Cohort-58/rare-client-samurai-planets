import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { updatePost, getPost } from '../../managers/PostManager.js'
import { getCategories } from "../../managers/CategoryManager.js"
import { useParams } from "react-router-dom"
import "./Posts.css"

export const PostEdit = () => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])
    const [chosenCategory, setChosenCategory] = useState(0)
    const {postId} = useParams()
     /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentPost, setCurrentPost] = useState({
        id:0,
        content: "",
        title: "",
        image: "",
        category: 0
    })

    useEffect(() => {
        getPost(postId)
        .then(setCurrentPost)
    }, [])

    useEffect(() => {
        // TODO: Get the categories, then set the state
        getCategories().then(setCategories)
    }, [])

    useEffect(() => {
        setChosenCategory(currentPost.category.id)
        }, [currentPost])


    const changePostState = (domEvent) => {
        // TODO: Complete the onChange function
        const copy = {...currentPost}
        const modify = domEvent.target.id
        copy[modify] = domEvent.target.value    
        setCurrentPost(copy)
    }

    return (
        <form className="postForm">
            <h2 className="postForm__title">Edit Post</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title"  className="form-control"
                        
                        onChange={changePostState }value={currentPost.title} required autoFocus
                    />
                </div>
            </fieldset>

            {/* TODO: create the rest of the input fields */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="image">Image: </label>
                    <input type="text" className="form-control" value = {currentPost.image} id="image" required autoFocus defaultValue={currentPost.image}
                        onChange={changePostState} />
                </div>
            </fieldset>
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="content">Post Content: </label>
                    <textarea type="text" className="form-control-content" id="content" required autoFocus defaultValue={currentPost.content}
                        onChange={changePostState} />
                </div>
            </fieldset>
            
            <fieldset>
                <div className="form-group">
                <label htmlFor="category">Category: </label>
                <select
                    id="category"
                    value = {chosenCategory} onChange = {event => setChosenCategory(event.target.value)}>
                    {
                        categories.map((category) => {
                            return <option key={`category--${category.id}`} selected value={category.id} >{category.label}</option>})
                    }
                    </select>
                </div>
            </fieldset>

            <button type="update"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const post = {
                        id: currentPost.id,
                        image: currentPost.image,
                        title: currentPost.title,
                        content: currentPost.content,
                        category: parseInt(chosenCategory)                    
                    }

                    // Send POST request to your API
                    updatePost(post)
                        .then(() => navigate("/posts"))
                }}
                className="btn btn-primary">Update Post</button>
        </form>
    )
}

