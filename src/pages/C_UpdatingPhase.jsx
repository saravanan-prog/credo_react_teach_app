import { Component } from "react"

export default class C_UpdatingPhase extends Component {

    constructor(){
        super()

        this.state = {
           qty : 1,
           price : 10,
           total : 10
        }
    }

    render(){
        return(
            <>
                <h1> Updating Phase  </h1>
                <div>
                    <h4> qty : {this.state.qty} </h4>
                    <h4> Price : {this.state.price} </h4>
                    <h4> total : {this.state.total} </h4>
                    <button onClick = {()=> this.setState({qty: this.state.qty + 1 })} > Add count </button>
                </div>

            </>
        )
    }

    componentDidUpdate(prevProps,prevState){
       if(prevState.qty != this.state.qty){
            this.setState( {total: this.state.qty * this.state.price} )
       }
    }
}