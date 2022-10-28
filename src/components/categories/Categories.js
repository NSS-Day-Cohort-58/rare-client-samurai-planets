import { Link } from "react-router-dom"
import "./Cats.css"
export const Categories = ({ id, label }) => {
    return <div className="tags" >
        <button >⚙️</button>
        <button >🗑️</button>
        <td><Link to={`/categories/${id}`}> {label}</Link></td>
    </div>
}