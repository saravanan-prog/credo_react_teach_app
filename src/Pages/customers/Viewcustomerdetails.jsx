import { useEffect,useState } from "react"
import { useLocation } from "react-router"

export default function Viewcustomerdetails(){

    const [customer,setCustomer] =useState({})
    const location = useLocation()
    const searchParam = new URLSearchParams(location.search)

    useEffect(()=>{
        const cusid = searchParam.get('id')
        getusersList(`https://fakestoreapi.com/users/${cusid}`)

        console.log("cusid===>",cusid)
    },[])

   const getusersList = async (url) => {
        let response = await fetch(url)
        let respData = await response.json()
        respData && setCustomer(respData)
   }

    return(
        <>  
            <div className="card" >
                <div className="card-body">
                    <p>Customer Name : {customer?.name?.firstname}</p>
                    <p>Customer Mobile : {customer?.phone}</p>
                     <p>Customer Email : {customer?.email}</p>
                </div>
            </div>
            
        </>
    )
}