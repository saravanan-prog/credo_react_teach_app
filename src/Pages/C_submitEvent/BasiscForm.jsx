import { useState } from "react"

export default function BasicForm() {

    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form is submitted")
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
        </>
    )
}