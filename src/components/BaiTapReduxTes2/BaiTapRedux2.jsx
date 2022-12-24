import React, { Component } from "react";
import ListRedux2 from "./ListRedux2";
import ModalRedux2 from "./ModalRedux2";

export default class BaiTapRedux2 extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-white bg-dark text-center mb-4">
          Bai Tap Gio Hang Redux 2
        </h1>
        <ModalRedux2 />
        <ListRedux2 />
      </div>
    );
  }
}
