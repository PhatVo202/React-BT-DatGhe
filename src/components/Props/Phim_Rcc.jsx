import React, { Component } from "react";

export default class Phim_Rcc extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { phim_input } = this.props;
    let { maPhim, tenPhim, biDanh, hinhAnh, trailer, moTa } =
      this.props.phim_input;
    return (
      <div>
        <div className="card">
          <img className="card-img-top" src={hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{tenPhim}</h4>
            <p className="card-text">{moTa}</p>
          </div>
        </div>
      </div>
    );
  }
}
