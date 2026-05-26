import { useState } from "react"

export default function BasicForm() {

    const [loginData,setLoginData] = useState({})

    const handleChange = (event) => {
        
        const fieldName =  event?.target?.name;
        const fieldValue = event?.target?.value;
        setLoginData({...loginData, [fieldName] : fieldValue})  
        
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Form is submitted",loginData)
    }




    return <div>
        <div className="title"> <h3> React Form </h3></div>
        <div>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label htmlFor="username">User name </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        onChange = {handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange = {handleChange}
                        
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
}