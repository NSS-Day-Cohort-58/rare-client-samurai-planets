import { useEffect, useState } from "react"
import "./users.css"
import { Link } from "react-router-dom"

export const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/users`)
            .then(response => response.json())
            .then((userArray) => {
                setUsers(userArray)
            })
    }, [])

    return <table className="Black">
        <thead>
            <tr>
                <th>Username</th>
                <th> Name</th>
                <th>Email</th>
                <th>Activity</th>
                <th>Role</th>
            </tr>
        </thead>
        {
            users.map(user =>
                <tbody key={user.id} >
                    <tr>
                        <td><Link to={`/users/${user.id}`}> {user.username}</Link></td>
                        <td>{user.first_name} {user.last_name}</td>
                        <td>{user.email}</td>
                        <td><input type="checkbox"/> Active</td>
                        <td><input type="radio"/> Author <input type="radio"/> Admin </td>
                    </tr>
                </tbody>
            )
        }
    </table>
}
