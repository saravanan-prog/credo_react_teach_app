import { useSelector,useDispatch } from "react-redux"
import { addcomments } from "./reviewpage.slice"
import { useRef } from "react"


export default function ReviewsPage(){

    const allComments = useSelector( state => state.reviews.comments)
    const commentRef = useRef()
    const dispatch = useDispatch()

    return <div>
        <h3> Reviews Page </h3>
        <div>
            <textarea name="review" id="review" rows={10} cols={10} ref={commentRef}> </textarea>
            <button onClick ={()=>dispatch(addcomments( {comments:commentRef?.current?.value} ))} >ADD review</button>
        </div>

        <div>
            <h3> Show Reviews </h3>
            {allComments.map((value,key)=> <p key={key}>{value}</p>)}
        </div>
     </div>
}