import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup'


const initalValue = {
    username: "",
    password: ""           
}

const validationSchema = Yup.object({

    username : Yup.string()
                .required("Username is required")
                .email("Username is must be email format"),

    
    password : Yup.string()
                .required("Password is required")
})

export default function BasicFormikYup() {


    return <div>

        <Formik
            initialValues={initalValue}
            validationSchema = { validationSchema }
            onSubmit={(values) => {
                console.log("Form is submitted ", values)
            }}
        >

            {({ handleChange }) => (

                <Form>
                    <div>
                        <label> User name</label>
                        <Field
                            type="text"
                            name="username"
                            onClick={handleChange}

                        />
                        <ErrorMessage name="username" component="div"/>
                    </div>

                    <div>
                        <label> Password </label>
                        <Field 
                            type="text" 
                            name="password"
                            onClick={handleChange}
                        />
                        <ErrorMessage name="password" component="div"/>
                    </div>
                    <div>
                        <Field type="submit" name="Login" value="Login" />
                    </div>

                </Form>



            )}

        </Formik>

    </div>
}