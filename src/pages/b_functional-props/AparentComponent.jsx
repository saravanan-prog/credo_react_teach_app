import BchildComponent from "./BchildComponent"
 

export default function AparentComponent(){


    const handleUpdate = () => {
        console.log("Update function is triggred")
    }

    const handleDelete = (profile) => {

        console.log("Update function is triggred",profile)
    }



    return(
        <>
          <div className="title"><h1> Functional Props </h1></div>

          <BchildComponent  
             handleUpdate = {handleUpdate}
             handleDelete = {handleDelete}
          
          />
        
        
        </>
    )
}