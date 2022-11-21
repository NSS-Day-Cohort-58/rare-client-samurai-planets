import { Link } from "react-router-dom"
import "./Cats.css"
export const Categories = ({ id, label }) => {
    return <div className="categoryDet" >
        <Link to={`/categories/${id}`}> {label}</Link>
        <div className = "buttonIcons">
            <button className = "settings">⚙️ Edit</button>
            <button className = "trash" >🗑️ Delete</button>
        </div>
    </div>
}