import { useState } from "react"

export default function BasicForm() {

    const [formData,setFormData] = useState({})


    const handleChange =(event) => {

        const name   = event?.target?.name
        const value  = event?.target?.value

        setFormData( {...formData, [name] : value })

    
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Your form is submitted===>",formData)

        //api - code
        

    }






    return <div>
        <div className="title"> <h3> React Form </h3></div>
        <div>
            <form  onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">User name </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
}