import { useContext, useEffect, useLayoutEffect, useState } from "react";

import tamilContent from '../../assets/lang/tamil.json'
import englishContent from '../../assets/lang/en.json'

import { MainContext } from "../../context/contextStore";


export default function HomePage(){
    
    const[pageContent,setPageContent] = useState('en')

    const { basicSetup:{language} } = useContext(MainContext)

  


    useLayoutEffect(()=>{
        if(language === 'en')
           setPageContent(englishContent)
        else
          setPageContent(tamilContent)
    },[])
    


    return (
        <div>
       
            <h1> {pageContent?.homeLabel_lg } </h1>
            <p> {pageContent?.Hello} </p>
        </div>

    )
}