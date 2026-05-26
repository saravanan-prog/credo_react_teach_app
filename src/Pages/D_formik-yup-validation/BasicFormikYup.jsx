import { ErrorMessage, Field, Form, Formik } from "formik";

import * as Yup from 'yup'


const initalValue = {
    username: "",
    password: ""
}



export default function BasicFormikYup() {


    return <div>
        <h3> Formik - validation- Example </h3>

        <Formik
            initialValues={initalValue}
            // validationSchema={validationSchema}

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