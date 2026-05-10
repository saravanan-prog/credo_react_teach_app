import React from "react"

export default function Skillset( {
   studentSkillset,
   
} ){
    
   

  return <div>
        <h5> Student Skills </h5>
        <table>
            <thead>
                <tr>
                   <th> Sno </th>
                   <th> Skills </th>
                   <th> Academic Year </th>
                   <th> Result </th>
                </tr>
            </thead>
            <tbody>
                {
                  studentSkillset.map((value,index) => {

                     return <tr>
                        <td>{ index + 1} </td>
                        <td>{ value?.Skillset}</td>
                        <td>{ value?.year}</td>
                        <td>{ value?.Result}</td>
                     </tr>
                  })
                }
            </tbody>
        </table>
    </div>
}