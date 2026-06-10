
import { useEffect, useState } from "react"
import axios from 'axios'

export default function UserList(){

    const [users,setUsers] = useState(null)

    useEffect(()=>{
        fetchUsers()
    },[])

    const fetchUsers = async () => {
        try{
             let response = await axios.get("https://fakestoreapi.com/users")
             console.log("response====>",response)

             if(response?.data)
                setUsers(response?.data)
        }
        catch(error){
            console.log(error)
        }
       
    }


    return <div>
        <h1>Users list</h1>
        {JSON.stringify(users)}
        
    </div>
}