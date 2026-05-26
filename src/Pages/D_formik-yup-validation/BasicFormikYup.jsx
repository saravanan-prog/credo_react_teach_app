import { ErrorMessage, Field, Form, Formik, FastField } from "formik";
import * as Yup from 'yup'


const initialValues = {
    username: "",
    password: "",
    confirmPassword :"",
    country: ""
}



const validationSchema = Yup.object({
    username: Yup.string()
        .required("User name field is required")
        .email("username is must be email format")
        ,

    password : Yup.string()
               .required("Password field is required") 
                .matches(
                     /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                    "Must contain 1 uppercase, 1 number, 1 special character"
                )
                .max(6,"Password maximum 6 char only")
               
               ,  

    
    country : Yup.string()
                .required("Country is required"),

    
    confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password")], "Passwords must match")
        
            

    
})


export default function BasicFormikYup() {




    return <div>
        <h3> Formik - Example </h3>

        <Formik
            initialValues={initialValues}

            validationSchema={
                validationSchema

            }


            onSubmit={(values) => {
                console.log("values====>", values)
            }}
        >

            <Form>
                <div>
                    <label htmlFor=""> Username </label>
                    <FastField type="text" name="username" />
                    <ErrorMessage name="username" component="div" className="text-danger"/>
                </div>

                <div>
                    <label htmlFor=""> Password </label>
                    <FastField type="text" name="password" />
                    <ErrorMessage name="password" component="div" className="text-danger" />
                </div>
                <div>
                    <label htmlFor=""> Confirm password </label>
                    <FastField type="text" name="confirmPassword" />
                    <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                </div>

                <div>
                    <label htmlFor=""> Country </label>
                    <FastField as="select" name="country">
                        <option value="IN"> India </option>
                        <option value="Pk"> Paksithan </option>
                        <option value="CN"> China </option>
                    </FastField>

                     <ErrorMessage name="country" component="div" className="text-danger"/>
                </div>

                <div>
                    <FastField type="submit" name="register" value="Register" />
                </div>


            </Form>


        </Formik>






    </div>

}