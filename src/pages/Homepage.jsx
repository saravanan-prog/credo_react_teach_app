import React, { useState } from 'react'
import studentList from '../core/json/studentList.json'

export default function Homepage(){

    
    const [student,setStudnet] = useState(studentList) 

    return <div>

        {student.map((value,index) => {

            return <div key={index}>
                    <p> Name : {value.name } </p>
                    <p> Age : {value.age } </p>
                    <p> school : {value.school } </p>
                    <hr/>
                </div>

        })}

       

       <button onClick = {
            ()=>setStudnet( [
                ...student,
                {
                    name:"vijayalakshmi",
                    age : 24,
                    school :"DAV"
                }
            ])
        }>
        Add New student
        </button>

    
    </div>
}