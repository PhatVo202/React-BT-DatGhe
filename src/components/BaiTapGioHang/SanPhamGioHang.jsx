import React, { Component } from "react";

export default class SanPhamGioHang extends Component {
  render() {
    let { item, themGioHang } = this.props;
    return (
      <>
        <div className="card">
          <img
            className="card-img-top"
            src={item.hinhAnh}
            alt="#"
            width={300}
            height={350}
          />
          <div className="card-body bg-dark text-white">
            <h4 className="card-title">{item.tenSP}</h4>
            <p className="card-text">{item.giaBan}</p>
            <button
              onClick={() => themGioHang(item)}
              className="btn btn-primary"
            >
              Add Cart
            </button>
          </div>
        </div>
      </>
    );
  }
}
