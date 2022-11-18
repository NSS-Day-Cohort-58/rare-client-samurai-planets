import { Link } from "react-router-dom"
import "./Cats.css"
export const Categories = ({ id, label }) => {
    return <div className="tags" >
        <td><Link to={`/categories/${id}`}> {label}</Link></td>
        <div className = "buttons">
            <button>⚙️</button>
            <button >🗑️</button>
        </div>
    </div>
}