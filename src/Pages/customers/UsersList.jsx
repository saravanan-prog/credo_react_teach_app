
import { useEffect, useState } from "react"
import axios from 'axios'

export default function UserList(){

    const [users,setUsers] = useState([])

    useEffect(()=>{
        fetchUsers("https://fakestoreapi.com/users")
    },[])

    const fetchUsers = async (url) => {
        try{
            let response = await axios.get(url)
            response && (setUsers(response?.data))
        }
        catch(error){
            console.log(error)
        }
       
    }


    return <div>
        <h1>Users list</h1>
        
      
            {users.map((value,index) => {
                return(
                    <div className="card"  key={index}>
                        <p> Name : {value?.name?.firstname +" "+value?.name?.lastname}</p>
                    </div>
                )
            })}
       
        </div>
        
        }