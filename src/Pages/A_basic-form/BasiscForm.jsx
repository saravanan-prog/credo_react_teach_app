import { useState } from "react"

export default function BasicForm() {

    const[formState,setFormState] = useState()

    const handleChange = (event) => {

        const name  = event.target.name
        const value = event.target.value

        setFormState( {...formState,[name] : value} )

    }

    const handleSubmit = (event) => {
        event.preventDefault()

        //api code 
        
         console.log("formState=====>",formState)
        
    }


    return <div>
        <div className="title"> <h3> React Form </h3></div>
        <div>
            <form onSubmit = {handleSubmit} >
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