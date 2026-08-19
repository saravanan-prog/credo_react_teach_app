import { useState } from "react"

export default function BchildComponent(
    { 
        handleUpdate,
        handleDelete
    }
){

    const [profile,setProfile] = useState(
        {
            name :"saravanan",
            age  : 25
        }
    )

    return(
        <>
          <p> Child Component </p>
          <button onClick = { handleUpdate } > Update </button>
          <button onClick = { () => handleDelete(profile) } > Delete </button>
        
        
        </>
    )
}