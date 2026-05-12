import { useEffect, useRef } from "react"


export default function UnControlledForm(){

    const formRef = useRef()

    const handleSubmit = (event) => {
       event.preventDefault()
      
       const username = formRef?.current[0]?.value;
       const password = formRef?.current[1]?.value;

       let payload = {
         "username" : username,
         "password" : password
       }

        console.log("payload===>",payload)
       
      
    }

    

    return <div>
        <form ref={formRef} onSubmit = {handleSubmit}>
            <div>
                <label>User name</label>
                <input type="text" name="username" />
            </div>
             <div>
                <label>Password</label>
                <input type="password" name="password" />
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
        
    </div>
}