import { useContext, useEffect, useState } from "react";
import ComponentA from './components/ComponentA'
import tamilContent from '../../core/lang/tamil.json'
import englishContent from '../../core/lang/en.json'

import { MainContext } from "../../core/context/contextStore";


export default function HomePage(){
    
    const[pageContent,setPageContent] = useState(null)

    const mainData = useContext(MainContext)
    const { language,mode } = mainData.basicPageSetup
    
    useEffect(()=>{

        if( language == "tamil")
            setPageContent(tamilContent)
        else
            setPageContent(englishContent)

    },[])
    


    return <div style = {mode == 'dark' ? {backgroundColor:"black",color:"white"} :{backgroundColor:"white",color:"black"} }>
        <h1> {pageContent?.homeLabel_lg } </h1>


        <div>
            <ComponentA />  
        </div>

        

    </div>

}