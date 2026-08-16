import React, { Component } from "react";

class Users extends Component {

  controller = new AbortController();

  componentDidMount() {

    fetch("https://api.example.com/users", {
      signal: this.controller.signal
    })
      .then(response => response.json())
      .then(data => {
        console.log("Users:", data);
      })
      .catch(error => {

        if (error.name === "AbortError") {
          console.log("API request cancelled");
        } else {
          console.log("API failed:", error);
        }

      });
  }

  componentWillUnmount() {

    this.controller.abort();

  }

  render() {
    return (
      <div>
        <h1>Users</h1>
      </div>
    );
  }
}

export default Users;