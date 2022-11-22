import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { updateComment, getSingleComment } from '../../managers/CommentManager.js'


export const UpdateCommentForm = () => {
    const navigate = useNavigate()
    const {commentId} = useParams()
    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentComment, setCurrentComment] = useState({
        content: "",
        post: 1
    })

    useEffect(() => {
        // TODO: Get the game types, then set the state
        getSingleComment(commentId).then(setCurrentComment)
    }, [commentId])

    const changeCommentState = (evt) => {
        // TODO: Complete the onChange function
        const copy = {...currentComment}
        copy[evt.target.id] = evt.target.value
        setCurrentComment(copy)
    }

    return (
        <form className="commentForm">
            <h2 className="commentForm__title">Edit Comment</h2>
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
                        id: commentId,
                        content: currentComment.content,
                        post: currentComment.post,
                    }

                    updateComment(comment)
                        .then(() => navigate("/comments"))
                }}
                className="btn btn-primary">Update Comment</button>
        </form>
    )
}