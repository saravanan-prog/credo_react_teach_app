import { useState } from "react"
import { useLanguage, useOtp } from "../../core/hooks/customHook"

export default function DemoPage(){

   const otp = useOtp(5)
   const content = useLanguage('ml')

   console.log("contet====>",content)

   return (
     <>
    
       <div>
           Your {content.otp} is : {otp}
       </div>

     
     </>
   )
}