export const getCurrentAuthor = () => {
    return fetch("http://localhost:8000/current_author", {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
    .then(response => response.json())
}

export const getAllAuthors = () => {
    return fetch("http://localhost:8000/authors", {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
    .then(response => response.json())
}

export const getAuthorById = (id) => {
    return fetch(`http://localhost:8000/authors/${id}`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
    .then(response => response.json())
}

export const editAuthor = (author) => {
    return fetch (`http://localhost:8000/authors/${author.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(author)
    })
    .then(response => response.json())
}
