import { Link } from "react-router-dom"
import "./Cats.css"
export const Categories = ({ id, label }) => {
    return <div className="categoryDet" >
        <td><Link to={`/categories/${id}`}> {label}</Link></td>
        <div className = "buttonIcons">
            <button className = "settings">⚙️</button>
            <button className = "trash" >🗑️</button>
        </div>
    </div>
}