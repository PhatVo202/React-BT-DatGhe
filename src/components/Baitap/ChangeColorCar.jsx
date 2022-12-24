import React, { Component } from "react";

export default class ChangeColorCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "./img/xeblue.png",
    };
  }
  changeColorCar = (colors) => {
    let colorImg = "";
    switch (colors) {
      case "blue":
        colorImg = "./img/xeblue.png";
        break;
      case "red":
        colorImg = "./img/xered.png";
        break;
      default:
        colorImg = "./img/xesilver.png";
    }
    this.setState({
      img: colorImg,
    });
  };

  render() {
    const color = {
      color: "#fff",
    };
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-7">
              Please choose your color car?
              <br />
              <img src={this.state.img} alt="" width={400} height={200} />
            </div>
            <div className="col-5">
              <button
                onClick={() => {
                  this.changeColorCar("blue");
                }}
                className="btn btn-danger"
                style={color}
              >
                Blue Color
              </button>
              <button
                onClick={() => {
                  this.changeColorCar("red");
                }}
                className="btn btn-primary"
                style={color}
              >
                Red Color
              </button>
              <button
                onClick={() => {
                  this.changeColorCar("silver");
                }}
                className="btn btn-success"
                style={color}
              >
                Silver Color
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
