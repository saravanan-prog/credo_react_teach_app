import React from "react";

export default class LifeCyclemethods extends React.Component {

    constructor(){
        super()
        console.log("1. constrctor is called ")
        this.state = {
            count : 0,
            pricipalAmt : 100
        }
    }

    componentDidMount(){
        //api code
    }

    componentDidUpdate(prevProps,prevState){

        console.log(" 3. compoent Did update ")
       
       if(prevState.count !== this.state.count){
            this.setState({
                pricipalAmt: this.state.pricipalAmt + 1
            })
        }
    }

    componentWillUnmount(){
        console.log("4. component is unmount")
    }
    

    render(){

        console.log("2. render inital phase")

        return <div>
            <h1> Hello Welcome to react js world</h1>

            <h3> Count : {this.state.count} </h3>
            <button onClick={()=> this.setState( { count:this.state.count + 1} )}> Add count </button>

            <p> Principal Amount : {this.state.pricipalAmt} </p>
        </div>
    }
}