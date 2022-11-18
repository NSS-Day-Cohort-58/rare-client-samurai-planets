import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { createPost, getCategories } from '../../managers/PostManager.js'


export const PostForm = () => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentPost, setCurrentPost] = useState({
        content: "",
        date: "",
        title: "",
        image: "",
        category: 0
    })

    useEffect(() => {
        // TODO: Get the categories, then set the state
        getCategories().then(data => setCategories(data))
    }, [])

    const changePostState = (domEvent) => {
        // TODO: Complete the onChange function
        const updatedPost = {...currentPost }
        updatedPost[domEvent.target.id] = domEvent.target.value
        setCurrentPost(updatedPost)
    }

    return (
        <form className="postForm">
            <h2 className="postForm__title">Register New Post</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" id="title" required autoFocus defaultValue={currentPost.title} className="form-control"
                        
                        onChange={changePostState}
                    />
                </div>
            </fieldset>

            {/* TODO: create the rest of the input fields */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="image">Image: </label>
                    <input type="text" className="form-control" name="image" id="image" required autoFocus defaultValue={currentPost.image}
                        onChange={changePostState} />
                </div>
            </fieldset>
            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date: </label>
                    <input type="date" className="form-control" name="date" id="date" required autoFocus defaultValue={currentPost.date}
                        onChange={changePostState} />
                </div>
            </fieldset> */}
            
            <fieldset>
                <div className="form-group">
                    <label htmlFor="content">Post Content: </label>
                    <input type="text" className="form-control" name="content" id="content" required autoFocus defaultValue={currentPost.content}
                        onChange={changePostState} />
                </div>
            </fieldset>
            
            <fieldset>
                <div className="form-group">
                <label htmlFor="category">Category: </label>
                <select
                    name="category" id="category"
                    onChange={changePostState}
                    defaultValue={currentPost.category}>
                    <option value="0">Choose category:</option>
                    {
                        categories.map(category => <option key={`category--${category.id}`} value={category.id} >{category.label}</option>)
                    }
                    </select>
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const post = {
                        image: currentPost.image,
                        title: currentPost.title,
                        date: currentPost.date,
                        skill_level: currentPost.content,
                        category: parseInt(currentPost.category)
                    }

                    // Send POST request to your API
                    createPost(post)
                        .then(() => navigate("/posts"))
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}