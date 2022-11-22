import { useEffect, useState } from "react"
import { Categories } from "./Categories"
import { Navigate, useNavigate } from "react-router-dom"
import { getCategories, createCategory, updateCategory, deleteCategory, getCategoryById } from "../../managers/CategoryManager"
import "./Cats.css"
import { getPosts } from "../../managers/PostManager"

export const CategoriesList = () => {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        getCategories().then(data => setCategories(data))

    }, [])

    const updateCategoryList = () => {
        getCategories().then(setCategories)
    }

    useEffect(() => {
        updateCategoryList()
    }, [])
    return <div className = "categories">
        <h4 className = "categoryHeader">List of Categories</h4>
            <button className = "create_category" onClick={() => {
            navigate({ pathname: "/category/new" })
        }}> Create a Category</button>
        {
            categories.map(category =>
                <Categories
                    key={`categories--${category.id}`}
                    id={category.id}
                    label={category.label}
                />
            )
        }
    </div>
}