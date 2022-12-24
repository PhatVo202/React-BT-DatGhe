import React, { Component } from "react";
import data from "../data/data.json";
import Phim_Rcc from "./Phim_Rcc";
import Phim_Rfc from "./Phim_Rfc";

export default class DemoProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangPhim: data,
    };
  }
  renderPhim = () => {
    return this.state.mangPhim.map((item) => {
      return (
        <>
          <div className="col-4">
            {/* <Phim_Rfc phim_input={item} /> */}
            <Phim_Rcc phim_input={item} />
          </div>
        </>
      );
    });
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row">{this.renderPhim()}</div>
        </div>
      </>
    );
  }
}
