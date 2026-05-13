import api from "../../core/api/api"
import { useEffect, useState } from "react"

export default function LoginPage(){

    

    const handleSubmit = async (event) => {
        event.preventDefault()

        let payload = {
            "username" : "johnd",
            "password" : "m38rmF$"
        }

        let response = await api.post("/auth/login",payload)
        console.log("response====>",response.data.token)

    }


    return <div>
        <h1>Login Page</h1>
        <form onSubmit = {handleSubmit}>

            <button type ="submit" > Login </button>
        </form>
    </div>
}