import { useState } from "react"
import { useFetch, useLanguage, useOtp } from "../../core/hooks/custom"

export default function DemoPage(){

   const[lang,setLang] = useState('en')
   const otp = useOtp(5)
   const content = useLanguage(lang)

   const apiResult = useFetch("https://fakestoreapi.com/products")

   console.log("apiResult=====>",apiResult)

   return (
     <>
        <div>
            <h3> Demo Page </h3>
        </div>

        <select onChange= {(e)=> setLang(e.target.value)}>
            <option value="tml">Tamil</option>
            <option value="en" selected>English</option>
            <option value="ml">Malayalam</option>

        </select>

        {apiResult.loading ?
             <p>Loading....</p>
        :
            (
                
            <div>
                {content.otp} : {otp}
            </div>
     
            )
        }


     
     </>
   )
}