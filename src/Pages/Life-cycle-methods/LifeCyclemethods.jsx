import React from "react";

export default class LifeCyclemethods extends React.Component {


    constructor(props){
        super(props)
       

        this.state= {
            count : 0
        }

         console.log("1. inital Phase",this.state.count)
    }

    componentDidUpdate(){
        console.log("4. updating phase",this.state.count)
    }

    componentDidMount(){
        console.log("3. did mount phase")
    }

    componentWillUnmount(){
        console.log("5. un mount phase")
    }

    render(){

        console.log("2. render inital phase")

        return <div>
            <h1> Hello Welcome to react js world</h1>
            <h3> Count : {this.state.count} </h3>
            <button onClick={()=> this.setState( { count:this.state.count + 1} )}> Add count </button>
        </div>
    }
}