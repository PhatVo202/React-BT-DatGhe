import React, { Component } from "react";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userName: "",
    };
  }
  login = () => {
    this.setState(
      {
        isLogin: true,
        userName: "Khai Cybersoft",
      },
      () => {
        console.log(this.state);
      }
    );
  };
  logout = () => {
    this.setState(
      {
        isLogin: false,
        userName: "",
      },
      () => {
        console.log(this.state);
      }
    );
  };
  render() {
    return (
      <div>
        <h1>State or SetState</h1>
        {this.state.isLogin ? (
          <div>
            Hello {this.userName} ! Cybersoft{" "}
            <button onClick={this.logout}>Logout</button>
          </div>
        ) : (
          <button onClick={this.login}>Login</button>
        )}
      </div>
    );
  }
}
