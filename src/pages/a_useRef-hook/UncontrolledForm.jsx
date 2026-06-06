import { useEffect, useRef } from "react"


export default function UnControlledForm(){

    const formRef = useRef()

   
    const handleSubmit = (e) => {
        e.preventDefault()
        
        const payload = {
            "username" : formRef?.current[0]?.value,
            "password":  formRef?.current[1]?.value
        }

        console.log("payload====>",payload)
        //api-code
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