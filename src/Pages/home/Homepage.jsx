import { useContext, useEffect, useLayoutEffect, useState } from "react";

import ComponentA from './components/ComponentA'

import tamilContent from '../../core/lang/tamil.json'
import englishContent from '../../core/lang/en.json'

import { MainContext } from "../../core/context/contextStore";


export default function HomePage(){
    
    const[pageContent,setPageContent] = useState(null)

    const { basicSetup } = useContext(MainContext)
    const {language} = basicSetup
  


    useLayoutEffect(()=>{
        if(language === 'en')
           setPageContent(englishContent)
        else
          setPageContent(tamilContent)
    },[])
    


    return <div  >
       
        <h1> {pageContent?.homeLabel_lg } </h1>
         <p> {pageContent?.Hello} </p>

        

        

    </div>

}