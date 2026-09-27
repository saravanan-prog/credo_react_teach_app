import { Formik, Form, Field, ErrorMessage } from "formik";
import formField from '../../assets/json/simpleRegisterField.json'
import { initialValues,validationSchema } from "./formAction";




export default function RegisterFormValidaiton() {
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={
                    (values, { resetForm }) => {
                        console.log("values====>", values);
                        resetForm();
                    }
                }
            >
                <Form>

                    {
                        formField.map((value, index) => {
                            return (
                                <div key={index}>
                                    <label htmlFor={value.fieldId}> {value.fieldLabel} </label>
                                    <Field
                                        type={value.fieldType}
                                        id={value.fieldId}
                                        class={value.fieldClass}
                                        name={value.fieldName}
                                    />
                                    <ErrorMessage
                                        name={value.fieldName}
                                        component="div"
                                        className="text-danger"
                                        style ={{color:"red"}}
                                    />
                                </div>
                            )
                        })
                    }

                </Form>
            </Formik>
        </>
    );
}
