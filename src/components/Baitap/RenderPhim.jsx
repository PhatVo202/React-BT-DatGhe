import React, { Component } from "react";
import data from "../data/data.json";

export default class RenderPhim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangPhim: data,
    };
  }
  renderFilm = () => {
    return this.state.mangPhim.map((item, index) => {
      return (
        <div className="card col-3 " key={index}>
          <img
            className="card-img-top"
            width={400}
            height={300}
            src={item.hinhAnh}
            alt={item.biDanh}
          />
          <div className="card-body">
            <h4 className="card-title">{item.tenPhim}</h4>
            <p className="card-text">
              {item.moTa.length > 100
                ? item.moTa.substring(0, 100) + "..."
                : item.moTa}
            </p>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row">{this.renderFilm()}</div>
        </div>
      </>
    );
  }
}
