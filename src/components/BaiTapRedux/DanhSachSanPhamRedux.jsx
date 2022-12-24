import React, { Component } from "react";
import data from "../data/dataPhone.json";
import SanPhamRedux from "./SanPhamRedux";

class DanhSachSanPhamRedux extends Component {
  renderSanPham = () => {
    return data.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPhamRedux item={item} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderSanPham()}</div>
      </div>
    );
  }
}

export default DanhSachSanPhamRedux;
