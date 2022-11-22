export const getCurrentUser = () => {
    return fetch("http://localhost:8000/current_user", {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
    .then(response => response.json())
}

export const getAllUsers = () => {
    return fetch("http://localhost:8000/users", {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        }
    })
    .then(response => response.json())
}

export const getUserById = (id) => {
    return fetch(`http://localhost:8000/users/${id}`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        }
    })
    .then(response => response.json())
}

