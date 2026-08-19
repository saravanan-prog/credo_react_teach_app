import { useState } from "react"
import Bchild from "./Bchild"


export default function Aparent(){

    const [canidateName,setCanidatename] = useState("Rajesh")
    const [candidateEmail,setCanidateEmail] = useState("rajesh@gmail.com")
    const [candidatePhone,setCandidatePhone] = useState("+91 9940570162")
    const [candidateAddress,setCandidateAddress] = useState( 
        {
            temp : {
                flatNumber :17,
                streetName :"4th Ave west",
                area : "Dhandeshwaram",
                city : "Velachery chennai"
            },
             permanent : {
                flatNumber :5,
                streetName :"8th cross st",
                area : "Pattukottai",
                city : "Tajavore"
            }
        }

    )


    return(
        <>
          <div className="title"><h1> React Props </h1></div>

           <Bchild 
                name  = {canidateName}
                email = {candidateEmail}
                phone = {candidatePhone }
                address = { candidateAddress}
           />
        
        </>
    )
}