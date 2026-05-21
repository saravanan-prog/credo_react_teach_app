import React, { useState } from 'react'

export default function Homepage(){

    const [student,setStudnet] = useState( 
       [ 
            {
                name : "saravanan",
                age : 28,
                school:"DAV matiriculation school"
            },
            {
                name : "Kriubhja",
                age : 24,
                school:"DAV matiriculation school"
            },
            {
                name : "Vignesh",
                age : 24,
                school:"DAV matiriculation school"
            }
       ]
    ) 

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