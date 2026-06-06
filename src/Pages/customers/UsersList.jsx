
import { useEffect, useState } from "react"
import axios from 'axios'

export default function UserList(){

    const [users,setUsers] = useState(null)

    useEffect(()=>{
        fetchUsers()
    },[])

    const fetchUsers = async () => {

        let response = await axios.get("https://fakestoreapi.com/users")
        if(response?.data)
            setUsers(response?.data)
    }


    return <div>
        <h1>Users list</h1>
        {JSON.stringify(users)}
        
    </div>
}