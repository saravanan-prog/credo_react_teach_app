
import { useEffect, useState } from "react"
import { api } from "../../../axios/axios-Instance"


export default function UserList(){

    const [loading,setLoading] = useState(true)
    const [users,setUsers] = useState([])

    useEffect(()=>{
       fetchCustomers();
    },[])

    const fetchCustomers = async () =>{
        try{    
            const url = "/users"
            const response =  await api.get(url)
            setUsers(response?.data)
            setLoading(false)
        } 
        catch(error){
            console.log(error)
        }
    }

    return (
        <>
            <div className="h3 text-center text-primary">Customers</div>
            <div>{loading && (<h4>Loading....</h4>)} </div>
            <table className="table">
                <tr>
                    <th>Canididate Name</th>
                    <th>Canididate Email</th>
                    <th>Canididate phone</th>

                </tr>
                
            {(users &&(users.length !=0 )) ?
            (
                users.map((value,key)=>{
                    return(
                        <tr>
                            <td>{value.name.firstname + " " +value.name.lastname}</td>
                            <td>{value.email}</td>
                            <td>{value.phone}</td>
                        </tr>
                        
                    )
                })
                
            )
            :
            (<tr colspan={3}> <td>No Users Found</td></tr>)
        
           }</table>
        
        </>
    )
}