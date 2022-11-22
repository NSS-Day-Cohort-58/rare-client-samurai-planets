import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { createComment } from '../../managers/CommentManager.js'


export const CommentForm = () => {
    const navigate = useNavigate()

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentComment, setCurrentComment] = useState({
        content: "",
        postId: 1
    })


    const changeCommentState = (evt) => {
        // TODO: Complete the onChange function
        const copy = {...currentComment}
        copy[evt.target.id] = evt.target.value
        setCurrentComment(copy)
    }

    return (
        <form className="commentForm">
            <h2 className="commentForm__title">Add New Comment</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="comment">Comment: </label>
                    <input type="text" name="content" id="content" required autoFocus className="form-control"
                        value={currentComment.content}
                        onChange={changeCommentState}
                    />
                </div>
            </fieldset>
            {/* TODO: create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const comment = {
                        author: currentComment.authorId,
                        content: currentComment.content,
                        post: currentComment.postId,
                    }

                    createComment(comment)
                        .then(() => navigate("/comments"))
                }}
                className="btn btn-primary">Submit Comment</button>
        </form>
    )
}