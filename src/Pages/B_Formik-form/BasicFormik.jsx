import './basicFormik.css'
import { Form, Formik,Field,ErrorMessage } from "formik";
import * as Yup from 'yup'



export default function BasicFormik() {
    
    const schema = Yup.object(
        {
            username: Yup.string()
                        .required("Please Enter username"),
            password: Yup.string()
                        .required("Please Enter Password")
                        .min(6, "Min 6 chars")
                        .matches(
                            /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                            "Password must contain one uppercase letter, one number, and one special character"
                        ),
            email : Yup.string()
                      .required("Please Enter Your email id")
                      .email("Please Enter valid email format"),
            country: Yup.string()
                      .required("Please choose your contry"),

            terms: Yup.boolean()
                        .oneOf([true], "You must accept the terms and conditions")

        }
    )

    return (
      <>
        <div>
          <h3> Register Form </h3>
        </div>
        <div>
          <Formik
            initialValues={{
              username: null,
              password: null,
              email: null,
              country : null,
              terms: false,
            }}
            validationSchema={schema}
            onSubmit={(values) => {
              console.log("Form Submitted ====>", values);
            }}
          >
            <Form>
              <div>
                <label htmlFor="username">Candidate Name </label>
                <Field
                  type="text"
                  name="username"
                  className="form-control"
                  id="username"
                />
                <ErrorMessage name="username" component="div" className="text-danger" />
              </div>
              <div>
                <label htmlFor="password"> Candidate Password </label>
                <Field
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </div>
              <div>
                <label htmlFor="email"> Candidate Email </label>
                <Field
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>
              <div>
                <label htmlFor="country" className="form-label">
                  Country
                </label>

                <Field
                  as="select"
                  name="country"
                  id="country"
                  className="form-select"
                >
                  <option value="">-- Select Country --</option>
                  <option value="india">India</option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                </Field>

                <ErrorMessage
                  name="country"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div>
                <Field
                  type="checkbox"
                  name="terms"
                  class="form-control"
                  id="terms"
                />
                <label htmlFor="terms">Accept the terms and Condtions </label>
                <ErrorMessage name="terms" component="div" className="text-danger" />
              </div>
              <div>
                <Field type="submit" value="Register" />
              </div>
            </Form>
          </Formik>
        </div>
      </>
    );

}