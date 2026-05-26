import { useEffect, useRef } from "react"

export default function UncontrolledForm() {

    const formRef = useRef()
    
    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = {
            email    : formRef.current[0].value,
            password : formRef.current[1].value
        }

        console.log("formData====>",formData)

    }



    return <div>
        <div className="title"> <h3> React Uncontrolled Form </h3></div>
        <div>
            <form onSubmit = {handleSubmit} ref={formRef}>
                <div>
                    <label htmlFor="username">User name </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password </label>
                    <input
                        type="password"
                        name="password"
                        id="password"  
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
}