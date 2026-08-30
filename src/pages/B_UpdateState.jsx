import { Component } from "react";

export default class B_UpdateState extends Component {
    
    constructor(){
        super()
        
        this.state = {
           canidateName : "saravanan",
           candidateAge : 28,
           candidateEmail : "saravanan@gmail.com"
        }
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    handleUpdate(){
    
        this.setState(
            {
                canidateName : "nagaraj",
                candidateAge : 29,
                candidateEmail : "nagaraj@gmail.com"
            }
        )
    }
    

    render(){

        return(
            <>
                <div>
                    <h2>Episode 2 :: React classComponent - Employee Information </h2>
                </div>
                <div>
                    <p>Canididate  Name : {this.state.canidateName}</p>
                    <p>Canididate Age:   {this.state.candidateAge} </p>
                    <p>Canididate Email: {this.state.candidateEmail} </p>
                </div>
                <div>
                    <button onClick={this.handleUpdate}>Bulk update</button>
                </div>
            
            </>
        )
    }

}