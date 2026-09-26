import * as Yup from 'yup'

export const initialValues = {
    canidatename: "",
    canidateEmail:"",
    candidtePassword:"",
    confirmPassword:""
};

export const validationSchema = Yup.object(
    {
        canidatename: Yup.string()
            .required("Please Enter Your name")
        ,
        canidateEmail : Yup.string()
            .required("Please Enter your Email id")
            .email("Invalid email Format"),
        candidtePassword :Yup.string()
            .required("Please Enter your Password")
            .min(8,"Your password minimum should 8 charcters")
            .max(10,"Your password should above 10 Character")
            .matches(/[A-Z]/, "One uppercase required")
            .matches(/[0-9]/, "One number required")
            .matches(/[!@#$%^&*]/, "One special char required"),
         confirmPassword :Yup.string()
            .required("Please Enter your Password")
            .min(8,"Your password minimum should 8 charcters")
            .max(10,"Your password should above 10 Character")
            .matches(/[A-Z]/, "One uppercase required")
            .matches(/[0-9]/, "One number required")
            .matches(/[!@#$%^&*]/, "One special char required")
            .oneOf([Yup.ref("candidtePassword")],"Your password doesn't match")
    }
)