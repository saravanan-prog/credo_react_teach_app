import { useEffect, useState } from "react"

export default function CustomerList( {users} ){
    
    console.log("customers====>",users)

    return (
        <>
            <div>
               {users.map((value)=>{
                   return (
                      <div key={value.id}>
                         <p>Candidate Name {value.name?.firstname} {value.name?.lastname}</p>
                         <p>Candidate Email {value.email}</p>
                        <hr/>
                      </div>
                     
                   )
               })}
            </div>
        </>
    )
}
