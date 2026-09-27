import { useState } from "react";
import React from "react";
import formFields from "../../assets/json/registrationFormField.json";

export default function JsonLoginForm() {

  const [formState, setFormState] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormState(
        { 
          ...formState,
           [name]: value
        } );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("formState=====>", formState);
    //api-code

   
  };

  return (
    <>
      <div className="title">
        <h3> Json Login Form </h3>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          { formFields.map((value, index) => {
              return (
                <div key={index}>
                  {value?.fieldEnable && (
                      <label htmlFor={value?.fieldId}> 
                        <span>{value.fieldLabel}</span>
                        {value?.fieldManditory && (<span>*</span>) }
                      </label>
                  )}
                 

                  { value?.fieldType != "select" &&
                    value?.fieldType != "textarea" && (
                      <input
                        type={value?.fieldType}   // text password date checkbox radiobox submit button
                        name={value?.fieldName}
                        id={value?.fieldId}
                        class = {value?.fieldClass}
                        palceholder = {value?.fieldPlaceholder}
                        onChange={handleChange}
                      />
                    )}


                    {( value?.fieldType =="textarea" ) && (value?.fieldEnable) &&  (
                      <textarea
                        name={value?.fieldName}
                        rows={value.fieldRow}                    // address, comments
                        cols={value.fieldcol}
                        onChange={handleChange}
                      ></textarea>
                    )}


                     {( value?.fieldType =="select") && (
                      <select
                        name={value?.fieldName} 
                        onChange={handleChange}
                       >
                        {value?.fieldOption.map((value,index) =>  <option value = {value} key={index}>{value}</option>)}
                      </select>
                       
                    )}
                </div>
              );
            })
        }
        </form>
      </div>
    </>
  );
}
