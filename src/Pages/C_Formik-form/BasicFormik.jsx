
import { Formik,Form,Field } from "formik"

export default function BasicFormik() {


    return <div>
        <h3> Formik - Example </h3>

        <Formik
            initialValues = {
                {
                    username : "",
                }
            }
            onSubmit={ (values, {resetForm} ) => {
                console.log("Form is submitted",values)
                resetForm()
            }}
        
        >
            {
                ( {handleChange} ) => ( 
                    <Form>
                        <div>
                            <label> Username </label>
                            <Field 
                                type="text" 
                                name="username" 
                                onChange = {handleChange}
                            />
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