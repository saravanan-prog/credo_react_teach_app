import { useState } from "react"
import React from "react"
import Formfields from './form-config/form-field.json'

export default function JsonLoginForm() {

    const [formState, setFormState] = useState()


    const handleChange = (event) => {

        const name = event.target.name
        const value = event.target.value

        setFormState({ ...formState, [name]: value })

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        //api-code

        console.log("formState=====>", formState)

    }


    return <div>
        <div className="title"> <h3> Json Login Form </h3></div>
        <div>
            <form onSubmit={handleSubmit} >
                {Formfields.map((value, index) => {

                    return <React.Fragment key={index}>
                        
                        {(value.fieldType != "button" || value.fieldType != "submit") ?
                            <div>
                                <label htmlFor={value?.fieldID}> {value?.fieldLabel} </label>
                                <input
                                    type={value?.fieldType}
                                    name={value?.fieldname}
                                    id={value?.fieldID}
                                    onChange={handleChange}
                                />
                                { (value?.fieldType =="checkbox") && (<label>{value?.fieldCheckboxLabel}</label>) }
                            </div>
                            :
                            <div>
                                <button 
                                    type={value.fieldID}
                                    
                                >{value.buttonText} </button>
                            </div>

                        }

                    </React.Fragment>
                })}

            </form>
        </div>
    </div>
}