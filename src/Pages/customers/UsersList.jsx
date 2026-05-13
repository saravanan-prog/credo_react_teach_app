
import { useEffect, useState } from "react"
import api from "../../core/api/api"

export default function UserList(){

    const [users,setUsers] = useState(null)

    useEffect(()=>{
        const getUserList = async() => {
            try{
                let response = await api.get("/users")
                setUsers(response?.data)
            }
            catch(error){
                throw new Error("Something went wrong !!!!")
            }
            
        }

        getUserList()
    },[])


    return <div>
        <h1>Users list</h1>
        {JSON.stringify(users)}
    </div>
}