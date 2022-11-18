export const getPosts = () => {
    return fetch("http://localhost:8000/posts", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}
export const getPost = (id) => {
    return fetch(`http://localhost:8000/posts/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(response => response.json())
}
export const getCategories = () => {
    return fetch("http://localhost:8000/Categories", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}
export const createPost = (post) => {
    return fetch("http://localhost:8000/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },    
        body: JSON.stringify(post)
    })
    .then(response => response.json())
}
export const updatePost = (post) => {
    return fetch(`http://localhost:8000/posts/${post.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },    
        body: JSON.stringify(post)
    })
    .then(response => response.json())
}
export const deletePost = (post) => {
    return fetch(`http://localhost:8000/posts/${post}`, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("lu_token")}`
    },
    })
}