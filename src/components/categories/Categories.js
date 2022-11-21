import { Link, useNavigate } from "react-router-dom"
import "./Cats.css"
import { deleteCategory } from "../../managers/CategoryManager"


export const Categories = ({ id, label }) => {
    const navigate = useNavigate()
    return <div className="categoryDet" >
        <Link to={`/categories/${id}`}> {label}</Link>
        <div className = "buttonIcons">
            <button className = "settings" onClick={() => {navigate(`/categories/${id}/edit`)}}>⚙️ Edit</button>
            
            <button className = "trash" 
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const categoryDel = {
                        id: id
                    }
                    deleteCategory(categoryDel)
                    .then(() =>window.location.reload(false))
                }}
            >🗑️ Delete</button>
        </div>
    </div>
}