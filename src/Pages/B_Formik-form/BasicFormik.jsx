import { Formik, Form, Field } from 'formik'
import formFields from './form-field.json'


const fields = {
    username: "",
    liveStatus: false
}

export default function BasicFormik() {
    console.log("formFields====>", formFields)

    return (
        <>
            <div><h3> Login Form </h3></div>

            <Formik
                initialValues={fields}
                onSubmit={(values) => console.log("form is submitted===>", values)}
            >
                <Form>

                    {formFields.map((value, index) => {
                        return (
                            <div>
                                <label >{value.fieldLabel}</label>
                                <Field
                                    type={value.fieldType !== "textarea" && value.fieldType}
                                    as={value.fieldType === "textarea" && value.fieldType}
                                    name={value.fieldName}

                                />
                            </div>

                        )

                    })}
                </Form>
            </Formik>

        </>
    )

}