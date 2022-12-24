import React, { Component } from "react";

import data from "../data/dataPhone.json";
import SanPhamRedux2 from "./SanPhamRedux2";

export default class ListRedux2 extends Component {
  renderPhone = () => {
    return data.map((phone, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPhamRedux2 phone={phone} />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="row">{this.renderPhone()}</div>
      </div>
    );
  }
}
