import { useSelector,useDispatch } from "react-redux"

export default function Dashboard(){

    const { data } = useSelector((state) => state.productReducer)


    return <div>
        <h1> Dashboard Page </h1>
        <div>
            <h4> Total Product Count </h4>
            <p>{data.length}</p>
        </div>
       

    </div>
}