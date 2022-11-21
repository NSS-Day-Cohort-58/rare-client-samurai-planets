import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { updateCategory, getCategoryById } from "../../managers/CategoryManager"
import { useParams } from "react-router-dom"


export const CategoryEdit= () => {
    const navigate = useNavigate()
    const {catId} = useParams()
    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentCategory  , setCurrentCategory] = useState({
        id:0,
        "label": ""
    })


    useEffect(() => {
        getCategoryById(catId)
        .then(setCurrentCategory)
    }, [])




    const changeCategoryState = (domEvent) => {
        // TODO: Complete the onChange function
        const copy = { ...currentCategory }
        const modify = domEvent.target.id
        copy[modify] = domEvent.target.value    
        setCurrentCategory(copy)
        }

    return (
        <form className="categoryForm">
            <h2 className="categoryForm__title">Update Category</h2>
            {/* TODO: create the rest of the input fields */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="label">Category Name:</label>
                    <input 
                    onChange={changeCategoryState}
                        type="text" id = 'label' value = {currentCategory.label} required autoFocus className="form-control"
                    />
                </div>
            </fieldset>

            <button type="Update"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const category = {
                        id: currentCategory.id,
                        label: currentCategory.label
                    }

                    // Send POST request to your API
                    updateCategory(category)
                        .then(() => navigate("/categories"))
                }}
                className="btn btn-primary">Update Category</button>
        </form>
    )
}