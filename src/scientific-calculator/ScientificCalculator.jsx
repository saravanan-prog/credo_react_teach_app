import { useSelector } from "react-redux"

export default function ScientificCalculator(){

    const count = useSelector((state)=> state.counter.count)

    return (
        <>
            <div>
                <h3>Scientific Calculator</h3>
            </div>
             <p> Exisiting counter : {count} </p>
        </>
    )
    
}   