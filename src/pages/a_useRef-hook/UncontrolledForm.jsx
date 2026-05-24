import { useEffect, useRef } from "react"


export default function UnControlledForm(){

    const formRef = useRef()

   

    

    return <div>
        <form ref={formRef}>
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