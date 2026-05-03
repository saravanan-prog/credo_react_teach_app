import React from "react";

export default class SimpleState extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            applicationName : "Credo Systems",
            courseFees : 20000,
            student : {
                studentName :"Ratheesh",
                studentAge  : 22,
                course : "React"
            },
            employee : {
                name : "saravanan",
                location: "chennai",
                work : "credo System- full stack mentor"
            }
        }

    }

    render(){
        return <div>

            <h1> {this.state.applicationName} </h1>

            <div className="mentor-information">
                <h3> Mentor name : {this.state.employee.name} </h3>
                <p> Specialist :   {this.state.employee.work} </p>
            </div>
            <hr/>
            <div className="student-info">
                <p> Student Name : {this.state.student.studentName}</p>
                <p>Picked Course : {this.state.student.course}</p>
            </div>

        </div>
    }



}