import React, { Component } from "react";
import DanhSachSanPhamRedux from "./DanhSachSanPhamRedux";
import ModalGioHangRedux from "./ModalGioHangRedux";

export default class BaiTapGioHangRedux extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center text-danger">Bai Tap Gio Hang Redux</h3>
        <ModalGioHangRedux />
        <DanhSachSanPhamRedux />
      </div>
    );
  }
}
