import { ErrorMessage, Field, Form, Formik } from "formik";
import { initalValue, validationSchema, formSubmit } from "./loginFormaction";
import formFields from './form-field.json'
import { useState,useEffect } from "react";
import { useNavigate } from "react-router";
import { auth } from "../../router/auth";

export default function LoginForm() {
    const [loginError,setLoginError] =  useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (auth())
            navigate('/dashboard')
    }, [])

    return (
        <div>

           {loginError && ( <div className="alert alert-danger alert-dismissible fade show">
                <button className="btn-close" data-bs-dismiss="alert"></button>
                <div className="h3"> Login Error</div>
           </div>)}

            <Formik
                initialValues={initalValue}
                validationSchema={validationSchema}
                onSubmit={(values) => formSubmit(values, navigate,setLoginError)}
            >
            {() => (

                    <Form>
                        {formFields && formFields.map(
                            (value, index) => {
                                return (
                                    <div key={index}>
                                        <label htmlFor={value?.filedID}> {value?.fieldlabel} </label>
                                        <Field
                                            type={value?.fieldType}
                                            name={value?.filedName}
                                        />
                                        <ErrorMessage name={value?.filedName} component="div" className="text-danger" />
                                </div>
                                )
                            })}
                    </Form>

                )}
            </Formik>
        </div>
    )
}