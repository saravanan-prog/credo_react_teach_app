import React from "react";

export default class LifeCyclemethods extends React.Component {


    

    render(){

        console.log("2. render inital phase")

        return <div>
            <h1> Hello Welcome to react js world</h1>
            <h3> Count : {this.state.count} </h3>
            <button onClick={()=> this.setState( { count:this.state.count + 1} )}> Add count </button>
        </div>
    }
}