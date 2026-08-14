import { useState } from "react"

export default function E_ReactArrayState() {

    const [fruitsList, setFruitsList] = useState(["apple", "orange", "grapes", "pineapple", "gova"])

    return (
        <>
            <div> <h1> Fruits List </h1> </div>

            <div>
                {
                    fruitsList.map((value, index) => <p key={index} > {value} </p>)
                }
            </div>

        </>
    )
}