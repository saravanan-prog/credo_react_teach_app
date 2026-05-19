import React from 'react'

export default class HomePage extends React.Component {

    constructor() {
        super()

        this.state = {
            candidateFirstname: "saravanan",
            candidateAge: 28,
            address: {
                streetNumber: 22,
                streetName: "1st cross st",
                area: "velachery",
                city: "chennai",
                pincode: 606105
            }
        }

    }

    render() {
        return <div>

            <h1> I am a Class Component </h1>
            <p><strong>Candidate Name : </strong> {this.state.candidateFirstname} </p>
            <p><strong>Candidate Age : </strong> {this.state.candidateAge} </p>
            <div><strong>Address  : </strong>
            
                {this.state.address.streetNumber + `, ` +
                    this.state.address.streetName + `, ` +
                    this.state.address.area + `, ` +
                    this.state.address.city + `- ` +
                    this.state.address.pincode

                }


            </div>


        </div>
    }

}