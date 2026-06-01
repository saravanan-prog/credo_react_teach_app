import React from "react";
import Childcomponent from "./ChildComponent";

export default class LifeCyclemethods extends React.Component {

    constructor(props){
        super(props)
        console.log("1. Constrctor is called")

        this.state = {
            price : 0,
            childcomponentEnable : false
        }

    }

    componentDidMount(){
        console.log("3. Component Did Mount")
    }

    //updating - phase

    componentDidUpdate(){
        console.log("4. Component did update ")
    }

    

  


    render(){

        console.log("2. render inital phase")

        return <div>
            <h1> Hello Welcome to react js world </h1>

            <p> Price : {this.state?.price}</p>
            <button onClick={()=> this.setState({price: this.state?.price + 1})}> Add count </button>

            <div>
                { this.state.childcomponentEnable && (<Childcomponent />) }
                
            </div>
        </div>
    }
}