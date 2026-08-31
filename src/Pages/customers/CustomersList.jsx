import { useState,useEffect } from "react"
import { Link, useParams } from "react-router"


export default function CustomerList(){
    const [usersList,setusersList] =useState([])
    useEffect(()=>{
        getusersList("https://fakestoreapi.com/users")
    },[])

   const getusersList = async (url) => {
        let response = await fetch(url)
        let respData = await response.json()
        respData && setusersList(respData)


   }

    return (
        <>
            <div> <h4> Our Customers </h4></div>
            <table className="table">
                <thead>
                    <th>Customer name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                     {usersList.map((value,index) => {
                        return (
                            <tr key={index}>
                                <td> {value.name.firstname + " " + value.name.lastname} </td>
                                <td> {value.email }</td>
                                <td>{value.phone }</td>
                                <td>
                                    <Link to={`viewcustomer?id=${value.id}`}> view details</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                   
            </table>
           
        
        
        </>
    )
}