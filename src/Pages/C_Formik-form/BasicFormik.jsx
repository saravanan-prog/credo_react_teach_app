
import { Formik, Form, Field, FastField } from 'formik'


export default function BasicFormik() {


    return <div>
        <h3> Formik - Example </h3>

        <Formik
            initialValues={{
                username: "",
                password: "",
                country: ""
            }}
            onSubmit={(values) => {
                console.log("values====>", values)
            }}
        >

            <Form>
                <div>
                    <label htmlFor=""> Username </label>
                    <FastField type="text" name="username" />
                </div>

                <div>
                    <label htmlFor=""> Password </label>
                    <FastField type="text" name="password" />
                </div>

                <div>
                    <label htmlFor=""> Country </label>
                    <FastField as="select" name="country">
                        <option value="IN"> India </option>
                        <option value="Pk"> Paksithan </option>
                        <option value="CN"> China </option>
                    </FastField>
                </div>

                <div>
                    <FastField type="submit" name="register" value="Register" />
                </div>


            </Form>


        </Formik>






    </div>

}