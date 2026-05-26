import { useState } from "react"
import React from "react"
import formFields from './form-config/form-field.json'

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
               {(formFields.length !=0 ) ?
                formFields.map((value,index) => {

                    return <div key ={index}>
                        <label htmlFor={value?.fieldId}> {value.fieldLabel} </label>


                            <input
                                type = {value?.fieldType}
                                name = {value?.fieldName}
                                id = {value?.fieldId}
                                onChange = {handleChange}
                                />
                        {value.fieldType =="checkbox" && <label htmlFor="checkbox-label"> checkbox Label </label> } 
                    </div>
                })
                    
                :
                <div></div>

               }
                
            </form>
        </div>
    </div>
}