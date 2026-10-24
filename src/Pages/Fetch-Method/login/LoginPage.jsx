import axios from "axios"
import { useEffect, useRef, useState } from "react"

export default function LoginPage(){

    const formRef = useRef()

    const handleSubmit = async (event) => {
        event.preventDefault()

        try{
            const url = "https://fakestoreapi.com/auth/login"
            const payload = {
                "username" : formRef.current[0].value,
                "password" : formRef.current[1].value
            }
            const option = {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(payload)
            }

            let response = await fetch(url,option)
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