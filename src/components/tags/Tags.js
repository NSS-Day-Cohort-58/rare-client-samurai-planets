import { Link } from "react-router-dom"
import "./Tags.css"
export const Tags = ({ id, label }) => {
    return <div className="tags" >
        <button >⚙️</button>
        <button >🗑️</button>
        <td><Link to={`/tags/${id}`}> {label}</Link></td>
    </div>
}