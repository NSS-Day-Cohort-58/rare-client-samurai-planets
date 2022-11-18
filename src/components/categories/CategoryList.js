import { useEffect, useState } from "react"
import { Categories } from "./Categories"
import { getCategories, createCategory, updateCategory, deleteCategory, getCategoryById } from "../../managers/CategoryManager"
import "./Cats.css"

export const CategoriesList = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(data => setCategories(data))

    }, [])

    return <article className="grid">
        <aside className="headNames" >
            <div>Edit            Delete            Categories</div>
        </aside>
        {
            categories.map(category =>
                <Categories
                    key={`categories--${category.id}`}
                    id={category.id}
                    label={category.label}
                />
            )
        }
    </article>
}