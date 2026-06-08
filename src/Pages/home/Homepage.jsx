import { useEffect, useState } from "react";
import ComponentA from './components/ComponentA'
import { HomeContext} from "../../core/context/contextStore";


export default function HomePage(){
    
   const studentName = "saravanan"
   const studentAge = 27


    return <div>
        <h1> Home Page </h1>


        <div>
            <HomeContext.Provider value = {
                {
                    "studentName":studentName,
                    "studentAge":studentAge
                }
            }>
                <ComponentA />
            </HomeContext.Provider>
            
        </div>

    </div>

}