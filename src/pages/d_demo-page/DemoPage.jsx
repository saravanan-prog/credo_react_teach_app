import { useEffect } from "react"
import {useRandom,useLang} from '../../core/hooks/customhook'


export default function DemoPage(){

    const content = useLang('tn')
    const otp     = useRandom()

    useEffect(()=>{
        console.log("content====>",content)

    },[])
    
    //Success state
    return (
        <div>
            <h1>{content?.demoPage_lg} </h1>
            <p> {content?.email_lg} : saravanan.mca1992@gmail.com</p>
            <p> Otp : {otp} </p>
        </div>
    );
}