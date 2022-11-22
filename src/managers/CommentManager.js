export const getComments = () => {
    return fetch("http://localhost:8000/comments", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

export const createComment = (comment) => {
    return fetch("http://localhost:8000/comments", { 
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)        
    })
        .then(response => response.json())
}


export const getSingleComment = (CommentId) => {
    return fetch(`http://localhost:8000/comments/${CommentId}`, { 
        method: "GET",
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify()
    })
        .then(response => response.json())
}


export const updateComment = (comment) => {
    return fetch(`http://localhost:8000/comments/${comment.id}`, { 
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)        
    })

}

export const deleteComment = (id) => {
    return fetch(`http://localhost:8000/comments/${id}`, { 
        method: "DELETE",
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`,
            "Accept": "application/json",
            "Content-Type": "application/json"            
        }
    })
}