import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { createCategory } from "../../managers/CategoryManager"

export const CategoryForm = () => {
    const navigate = useNavigate()

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentCategory  , setCurrentCategory] = useState({
        "label": ""
    })




    const changeCategoryState = (domEvent) => {
        // TODO: Complete the onChange function

        const copy = { ...currentCategory }
        copy[domEvent.target.id] = domEvent.target.value
        setCurrentCategory(copy)
        }

    return (
        <form className="categoryForm">
            <h2 className="categoryForm__title">Create A New Category</h2>
            {/* TODO: create the rest of the input fields */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="label">Category Name:</label>
                    <input 
                    onChange={changeCategoryState}
                        type="text" id = 'label' required autoFocus className="form-control"
                    />
                </div>
            </fieldset>

            <button type="Create"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const category = {
                        label: currentCategory.label
                    }

                    // Send POST request to your API
                    createCategory(category)
                        .then(() => navigate("/categories"))
                }}
                className="btn btn-primary">Create Category</button>
        </form>
    )
}