import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { deleteComment, getComments } from "../../managers/CommentManager.js"

export const CommentList = (props) => {
    const navigate = useNavigate()
    const [ comments, setComments ] = useState([])


    const updateCommentList = () => {
        getComments().then(data => setComments(data))
    }

    useEffect(() => {
        updateCommentList()
    }, [])


    return (
        <article className="comments">
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    navigate({ pathname: "/comments/new" })
                }}
            >Create Comment</button>
            {
                comments.map(comment => {
                    return <section key={`game--${comment.id}`} className="comment">
                        <div className="comment_author">Author: {comment.author_name}</div>
                        <div className="comment">Comment: {comment.content}</div>
                        <button className="btn btn-2 btn-sep icon-create"
                            onClick={() => {
                                navigate({ pathname: `/comments/edit/${comment.id}` })
                            }}
                        >Edit Comment</button>
                        <button className="btn btn-2 btn-sep icon-create"
                            onClick={() => {
                            deleteComment(comment.id)
                                .then(() => updateCommentList())
                            }}
                        >Delete Comment</button>
                    </section>
                })
            }
        </article>
    )
}