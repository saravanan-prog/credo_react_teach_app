import axios from "axios"
import { useEffect, useRef, useState } from "react"

export default function LoginPage(){

    const formRef = useRef()

    const handleSubmit = async (event) => {
        event.preventDefault()

        try{
            let payload = {
                "username" : formRef.current[0].value,
                "password" : formRef.current[1].value
            }

            let response = await axios.post("https://fakestoreapi.com/auth/login",payload)
            console.log("response=====>",response)
            localStorage.setItem("token",response?.data.token)
        }
        catch(error){
            console.log("error===>",error?.message)
        }

        

    }


    return <div>
        <h1>Login Page</h1>
        <form ref={formRef} onSubmit = {handleSubmit}>
            <div>
                <label >User Name </label>
                <input type="text" name="username" />
            </div>

            <div>
                <label> Password </label>
                <input type="text" name="password" />
            </div>

            <button type ="submit" > Login </button>
        </form>
    </div>
}