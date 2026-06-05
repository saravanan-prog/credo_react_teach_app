import { useContext, useEffect, useState } from "react";
import ComponentA from './components/ComponentA'
import tamilContent from '../../core/lang/tamil.json'
import englishContent from '../../core/lang/en.json'

import { HomeContext,MainContext} from "../../core/context/contextStore";





export default function HomePage(){
    const[pageContent,setPageContent] = useState(null)
    const [studentName,setStudentName] = useState("Saravanan")
    const [studentAge,setStudentAge] = useState(27)


    const mainData = useContext(MainContext)

    useEffect(()=>{

        if(mainData.basicPageSetup.language == "tamil")
            setPageContent(tamilContent)
        else
             setPageContent(englishContent)

    },[])
    


    return <div>
        <h1> {pageContent?.home_lg } </h1>


        <div>
            <HomeContext.Provider value={{"studentName":studentName,"studentAge":studentAge}}>
                <ComponentA />
            </HomeContext.Provider>
            
        </div>

        

    </div>

}