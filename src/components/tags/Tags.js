import { Link } from "react-router-dom"

export const Tags = ({ id, label }) => {
    return <section className="Tag">
        <div>label:<Link to={`/tags/${id}`}> {label}</Link></div>
    </section>
}