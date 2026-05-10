import { useState } from "react"

export default function NameListPreparation(){

    const[student,setStudent] = useState()
    const[namelist,setNameList] = useState([])

    const addNewStudent =() =>{
        setNameList([...namelist,student])
    }
    return <div>
        <h3>Student List </h3>
        <div>
            {namelist.length != 0 ? 
                namelist.map((value,index) => <p key={index}>{value}</p>)
            :<p> No Record Found </p>}
        </div>

        <div>
            <input type="text" onChange = {(e)=>setStudent(e?.target?.value)} />
            <button onClick={addNewStudent}> Add </button>
        </div>

    </div>
}