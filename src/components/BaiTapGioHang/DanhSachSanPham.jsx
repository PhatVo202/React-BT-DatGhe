import React, { Component } from "react";
import SanPhamGioHang from "./SanPhamGioHang";

export default class DanhSachSanPham extends Component {
  render() {
    let { mangSanPham, themGioHang } = this.props;
    return (
      <div className="container">
        <div className="row">
          {mangSanPham.map((item) => {
            return (
              <div className="col-4" key={item.maSP}>
                <SanPhamGioHang themGioHang={themGioHang} item={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
