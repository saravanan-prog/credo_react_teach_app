import { Component } from "react"

export default class B_MountingPhase extends Component {

    constructor(){
        super()

        this.state = {
           "email": "john@gmail.com",
            "username": "johnd",
            "password": "m38rmF$",
            "name": {
                "firstname": "john",
                "lastname": "doe"
            },
            "phone": "1-570-236-7033",
        }
    }

    render(){
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