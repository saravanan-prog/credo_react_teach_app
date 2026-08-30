import { Component } from "react"

export default class B_MountingPhase extends Component {

    constructor(){
        console.log("1. constructor calling")

        super()

        this.state = {
            
            "name": {
                "firstname": "john",
                "lastname": "doe"
            },
            "email": "john@gmail.com",
            "phone": "1-570-236-7033",
        }
    }

    render(){
        console.log("2. render calling")

        return(
            <>
                <h1> Class Component </h1>
                <p> Candidate Name :   {this.state.name.firstname + " " + this.state.name.lastname} </p>
                <p> Candidate Email :  {this.state.email} </p>
                <p> Candidate Phone :  {this.state.phone}</p>

            </>
        )
    }

    componentDidMount(){

        console.log("3. componentdidmount calling")

        fetch("https://fakestoreapi.com/users/2")
        .then(response => response.json())
        .then( data => {

            this.setState( 
                {
                    name : {
                        firstname :  data.name.firstname,
                        lastname  :  data.name.lastname
                    },
                    email : data.email,
                    phone : data.phone
                }

            )
         
        })
    }
}