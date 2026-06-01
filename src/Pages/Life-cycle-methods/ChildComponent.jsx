import React from "react";

export default class Childcomponent extends React.Component {


    constructor(props){
        super(props)
        this.state = {

        }

       this.timerInterval =  setInterval(()=> console.log("Hello React JS"),1000)
    }

    componentWillUnmount(){
       
        clearInterval(this.timerInterval)
    }

    render(){

        return <div>
            <p> Child Component </p>
        </div>
    }
}