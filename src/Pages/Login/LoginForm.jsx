import { ErrorMessage, Field, Form, Formik } from "formik";
import { initalValue, validationSchema, formSubmit } from "./loginFormaction";
import formFields from './form-field.json'
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { auth } from "../../router/auth";

export default function LoginForm() {

    const navigate = useNavigate()

    useEffect(()=>{
        if(auth())
            navigate('/dashboard')
    },[])

    return <div>

        <Formik
            initialValues={initalValue}
            validationSchema={validationSchema}
            onSubmit={ (values) => formSubmit(values,navigate) }
        >

            {({ handleChange }) => (

                <Form>
                    {formFields && formFields.map(
                        (value, index) => {
                            return <div key={index}>
                                <label htmlFor={value?.filedID}> {value?.fieldlabel} </label>
                                <Field
                                    type={value?.fieldType}
                                    name={value?.filedName}
                                    onClick={ handleChange }
                                />
                                <ErrorMessage name={value?.filedName} component="div" />
                            </div>
                        })}
                </Form>

            )}
        </Formik>

    </div>
}