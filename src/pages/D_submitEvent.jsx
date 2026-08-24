import { useState } from "react"

export default function D_submitEvent() {

    const [loginData,setLoginData] = useState({})

    const handleChange = (e) => {
        const fieldname  =  e.target.name
        const fieldValue =  e.target.value

        setLoginData( 
            {
                ...loginData,
                [fieldname] : fieldValue
            }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form is submitted",loginData)
    }


    return (
        <>
            <div>
                <div className="title"> <h3> React Form </h3></div>
                <div>
                    <form onSubmit={handleSubmit}>
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
        </>
    )
}