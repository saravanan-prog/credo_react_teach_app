import { ErrorMessage, Field, Form, Formik } from "formik";

import * as Yup from 'yup'


const initalValue = {
    username: "",
    password: ""
}

const validationSchema = Yup.object(
    {
        username: Yup.string()
            .required("Username is required")
            .email("username is must be email format"),

        password: Yup.string()
            .required("Pasword is required")
            .min(6, "Password must be minimu 6 letters")
            .matches(/[A-Z]/, "One uppercase required")
            .matches(/[0-9]/, "One number required")
            .matches(/[!@#$%^&*]/, "One special char required")



    }
)

export default function BasicFormikYup() {


    return <div>
        <h3> Formik - validation- Example </h3>

        <Formik
            initialValues={initalValue}
            validationSchema={validationSchema}

            onSubmit={(values, { resetForm }) => {
                console.log("Form is submitted", values)
                resetForm()
            }}

        >
            {
                ({ handleChange }) => (
                    <Form>
                        <div>
                            <label> Username </label>
                            <Field
                                type="text"
                                name="username"
                                onChange={handleChange}
                            />
                            <ErrorMessage name="username" component="div" />
                        </div>

                        <div>
                            <label> Password </label>
                            <Field
                                type="password"
                                name="password"
                                onChange={handleChange}
                            />
                            <ErrorMessage name="password" component="div" />
                        </div>


                        <div>
                            <Field type="submit" value="Register" />
                        </div>

                    </Form>
                )
            }
        </Formik>

    </div>
}