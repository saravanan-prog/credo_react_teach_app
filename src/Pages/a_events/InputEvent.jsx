
import { useState } from "react"

export default function InputEvent() {

    const [input, setInput] = useState()

    return <div>
        <h2> Input Event </h2>

        <div>
            <input
                type="text"
                onChange={(event) => setInput(event.target.value)}
            />
            
            <p> You Entered Text is : {input} </p>

        </div>
    </div>
}