import { ErrorMessage, Field, Form, Formik } from "formik";
import { initalValue, validationSchema, formSubmit } from "./loginFormaction";
import formFields from './form-field.json'
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { auth } from "../../router/auth";

export default function LoginForm() {

    const params = useParams()
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (auth())
            navigate('/dashboard')
    }, [])

    return (
        <div>
            <Formik
                initialValues={initalValue}
                validationSchema={validationSchema}
                onSubmit={(values) => formSubmit(values, navigate)}
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