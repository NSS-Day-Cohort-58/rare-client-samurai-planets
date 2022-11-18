import { useEffect, useState } from "react"
import { Categories } from "./Categories"
import "./Cats.css"

export const CategoriesList = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/categories`)
            .then(response => response.json())
            .then((categoryArray) => {
                setCategories(categoryArray)
            })
    }, [])

    const willDelete = (categories) => {
        const copy = {
            label: categories.label
        }
        return fetch(`http://localhost:8000/categories/${categories.id}`, {
            method: "DELETE",
        })
            .then(response => response.json())
            .then(() => {
                fetch(`http://localhost:8000/categories`)
                    .then(response => response.json())
                    .then((categories) => {
                        setCategories(categories)
                    })
            })
    }

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