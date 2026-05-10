import { useState } from "react"

export default function ChangeEvent(){

    const [searchText,setSearchText] = useState()

    return <div>
        <input type="text"  onChange={(e)=>setSearchText(e?.target?.value)}/>
        <p> you have typed text is :- {searchText}</p>
    </div>
}