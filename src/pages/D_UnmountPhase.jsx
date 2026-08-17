import { Component } from "react"

export default class D_UnmountPhase extends Component {

    constructor(){
        super()

        this.controller = new AbortController()

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
        fetch("https://fakestoreapi.com/users/2", {
            signal : this.controller.signal
        })
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

    componentWillUnmount(){
        console.log("Will unmount calling")
        this.controller.abort()
    }
}