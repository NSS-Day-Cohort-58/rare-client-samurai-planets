import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./users.css"

export const UserDetails = () => {
    const { userId } = useParams()
    const [user, updateUser] = useState()

    useEffect(
        () => {
            fetch(`http://localhost:8000/users/${userId}`)
                .then(response => response.json())
                .then((data) => {
                    updateUser(data)
                })
        },
        []
    )
    return <section className="user" >
        <header className="user__header"><h1>Name: {user?.first_name} {user?.last_name}</h1></header>
        <div className="image"> <img src={user?.profile_image_url} alt="" width="90" height="90" /> </div>
        <div>
            <div className="user_author" ><h1>Username: {user?.username}</h1> </div>
            <div className="user_date" ><h1>User since: {user?.created_on}</h1> </div>
        </div>
        <div>{user?.bio} </div>
        <footer className="user__footer"></footer>
    </section>
}
