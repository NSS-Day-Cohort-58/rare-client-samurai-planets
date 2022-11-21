export const getCategories = () => {
    return fetch("http://localhost:8000/categories", {
        method: "GET",    
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`

        }
    })
        .then(response => response.json())
}


export const createCategory = (newCategoryObject) => {
    return fetch("http://localhost:8000/categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`

        },
        body: JSON.stringify(newCategoryObject)
    })
        .then(res => res.json())
}


export const updateCategory = (category) => {
    return fetch(`http://localhost:8000/categories/${category.id}`, {
        method: "PUT",    
        headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem("auth_token")}`
            },
            body: JSON.stringify(category)
         })
}

export const getCategoryById = (id) => {
    return fetch(`http://localhost:8000/categories/${id}`, {
        method: "GET",    
        headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem("auth_token")}`
            }
     })
        .then(response => response.json())
    }

export const deleteCategory = (category) => {
    return fetch(`http://localhost:8000/categories/${category.id}`, {
        method: "DELETE",    
        headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem("auth_token")}`
            },
            })
}