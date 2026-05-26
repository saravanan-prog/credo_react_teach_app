import { useState } from "react";
import React from "react";
import formFields from "./form-config/form-field.json";

export default function JsonLoginForm() {
  const [formState, setFormState] = useState(
    
  );

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //api-code

    console.log("formState=====>", formState);
  };

  return (
    <div>
      <div className="title">
        <h3> Json Login Form </h3>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          { formFields.map((value, index) => {
              return (
                <div key={index}>
                  <label htmlFor={value?.fieldId}> {value.fieldLabel} </label>

                  { value?.fieldType != "select" &&
                    value?.fieldType != "textarea" && (
                      <input
                        type={value?.fieldType}   // text password date checkbox radiobox submit button
                        name={value?.fieldName}
                        id={value?.fieldId}
                        onChange={handleChange}
                      />
                    )}


                    {( value?.fieldType =="textarea") && (
                      <textarea
                        name={value?.fieldName}
                        rows={10}
                        cols={10}
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
    </div>
  );
}
