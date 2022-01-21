import { useEffect, useState } from 'react'
import User from './User'
import '../css/UserList.css'
function UserList() {
    const [users, setUsers] = useState([])
    const getUsers = async () => {
        const response = await fetch(`/utilizatori`) //luam datele de pe server

        const data = await response.json() //extragem datele
        setUsers(data)


    }
    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className='user-list'>
            {users.map(e => <User key={e.id} item={e} />)}
        </div>
    )
}
export default UserList