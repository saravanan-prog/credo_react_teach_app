import { useContext } from "react"
import { HomeContext } from "../../../core/context/contextStore"


export default function ComponentD(){

    const data = useContext(HomeContext)


    console.log("data=====>",data)


    return <div>
         <h5> ComponentD </h5>
         <p> Studnet name : {data?.studentName}</p>
         <p> Student Age : {data?.studentAge} </p>
         
    </div>

}