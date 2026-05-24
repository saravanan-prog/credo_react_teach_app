
import * as Yup from 'yup'


export const initalValue = {
    username: "",
    password: ""           
}


export const validationSchema = Yup.object({

    username : Yup.string()
                .required("Username is required"),

    
    password : Yup.string()
                .required("Password is required")
})

export const formSubmit = async (values,navigate) => {

    console.log("values====>",values,"navigate====>",navigate)
    

    let payload = {

        "username" : values.username.trim(),
        "password" : values.password.trim()
    }


    let options = {
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(payload)
    }

 

    try{
        let response =  await fetch("https://fakestoreapi.com/auth/login",options)
        let responseData = await response.json()
        localStorage.setItem("token",responseData?.token)
        //navigation-code 
        navigate('/dashboard')
        
    }
    catch(error){
        console.error(error)
    }
    

    


}