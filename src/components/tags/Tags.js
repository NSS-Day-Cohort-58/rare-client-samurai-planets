import { Link } from "react-router-dom"
import "./Tags.css"
export const Tags = ({ id, label }) => {
    return <td><Link to={`/tags/${id}`}> {label}</Link></td>
    
}