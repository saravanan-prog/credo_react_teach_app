import { Field, Form, Formik } from "formik";



export default function BasicFormik() {


    return <div>

        <Formik
            initialValues={
                {
                    username: "",
                    password: ""
                }
            }

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
                    </div>

                    <div>
                        <label> Password </label>
                        <Field 
                            type="text" 
                            name="password"
                            onClick={handleChange}
                        />
                    </div>
                    <div>
                        <Field type="submit" name="Login" value="Login" />
                    </div>

                </Form>


            )}

        </Formik>

    </div>
}