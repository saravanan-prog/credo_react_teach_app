import { useEffect, useState,lazy,Suspense } from "react"
//import CustomerList from "./CustomerList"

const CustomerList = lazy(()=> import("./CustomerList"))

export default function Customers(){
    
    const [users,setUsers] = useState([])

    useEffect(()=>{
        getCustomerList()
    },[])

    const getCustomerList = async()=> {
       let response = await  fetch("https://fakestoreapi.com/users")
       let data = await response.json()
       console.log("data===>",data)
       setUsers(data)
    }   


    return (
        <>
            <Suspense fallback ={<h4>Loading...</h4>}>
                <div>
                     <CustomerList users = {users} />
                </div>
            </Suspense>
            
        </>
    )
}