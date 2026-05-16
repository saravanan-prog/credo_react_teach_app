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
                        
                        {(  value.fieldType != "button"  && 
                            value.fieldType != "submit"  &&
                            value.fieldType != "selectbox" &&
                            value.fieldType != "textarea"
                          ) ?
                            <div>
                                <label htmlFor={value?.fieldID}> {value?.fieldLabelName} </label>
                                <input
                                    type={value?.fieldType}
                                    name={value?.fieldname}
                                    className={value?.fieldClass}
                                    id={value?.fieldID}
                                    onChange={handleChange}
                                />
                                { (value?.fieldType =="checkbox") && (<label>{value?.fieldCheckboxLabel}</label>) }
                            </div>
                            :
                            (value.fieldType == "selectbox") ?
                            <div>
                                 <label htmlFor={value?.fieldID}> {value?.fieldLabelName} </label>
                                <select 
                                    name ={value.fieldname} 
                                    onChange={handleChange} 
                                >
                                    {value?.options.map( (country,index)  => <option value={country}> {country} </option> ) }
                                </select>
                            </div>
                              
                            :

                            (value.fieldType == "textarea") ?
                             <div>

                                 <label htmlFor={value?.fieldID}> {value?.fieldLabelName} </label>
                                 <textarea 
                                    name={value?.fieldname}
                                    rows = {value?.fieldRow}
                                    cols = {value?.fieldCol}
                                    onChange={handleChange}
                                
                                >  </textarea>
                             </div>  
                             
                            :

                            <div>
                                <button 
                                    type={value?.fieldType}
                                    
                                >{value.buttonText} </button>
                            </div>

                        }

                    </React.Fragment>
                })}

            </form>
        </div>
    </div>
}