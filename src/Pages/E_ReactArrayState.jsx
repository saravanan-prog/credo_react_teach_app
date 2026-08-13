import { useState } from "react"

export default function E_ReactArrayState(){

   const [fruitsList,setFruitsList] = useState( ["apple","orange","grapes","pineapple","gova"])


    return (
        <>
            <div>
                <h1> Fruits List </h1>
                {
                    fruitsList.map((value,key) => <p key={key}> {value} </p> )
                }
            </div>
        </>
    )
}