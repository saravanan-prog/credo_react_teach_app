import { useState } from "react";

export default function B_SelectBoxEvent() {

    const [selectFruit,setSelectFruit] = useState(null)

    return (
        <>
            <div>
                <select onChange = {(e)=>setSelectFruit(e.target.value) }>
                    <option value="apple"> Apple </option>
                    <option value="orange"> Orange </option>
                    <option value="grapes">Grapes</option>
                </select>
            </div>
            <div>
                {selectFruit && (
                    <p> <strong> You selected Fruit is :</strong>  {selectFruit} </p>
                )}
            </div>
        </>
    )
}
