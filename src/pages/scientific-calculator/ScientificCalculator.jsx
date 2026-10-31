import { useDispatch,useSelector } from "react-redux"

export default function ScientificCalculator(){

    const dispatch = useDispatch()

    const count = useSelector((state) => state.counter.count)
    

    return (
        <>
            <div className="conatiner mt-3">
                <div className="h5 text-center-text-primary">Scientific calculator</div>
                <div className="">Counter App State count : {count} </div>
            </div>
            
        </>
    )
    
}   