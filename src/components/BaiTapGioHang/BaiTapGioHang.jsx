import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import ModalGioHang from "./ModalGioHang";
import dataPhone from "../data/dataPhone.json";

export default class BaiTapGioHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gioHang: [],
    };
  }

  // Feature add Product
  themGioHang = (sanPhamChon) => {
    let spGioHang = {
      maSP: sanPhamChon.maSP,
      tenSP: sanPhamChon.tenSP,
      giaBan: sanPhamChon.giaBan,
      hinhAnh: sanPhamChon.hinhAnh,
      soLuong: 1,
    };

    //Kiem tra san pham co trong gio hang chua
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === spGioHang.maSP);
    if (index !== -1) {
      //san pham click vao da co trong gio hang(trung nhau)
      gioHangCapNhat[index].soLuong += 1;
    } else {
      //san pham click chua co trong gio hang
      gioHangCapNhat.push(spGioHang);
    }
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  //Feature delete Product
  xoaGioHang = (maSP) => {
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSP);
    if (index !== -1) {
      gioHangCapNhat.splice(index, 1);
    }
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  //Increase-Descrease Product
  tangGiamSl = (maSP, tangGiam) => {
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSP);
    if (tangGiam) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      if (gioHangCapNhat[index].soLuong > 1) {
        gioHangCapNhat[index].soLuong -= 1;
      } else if (window.confirm("Ban co muon xoa khong?")) {
        // khi user click vao xac nhan
        gioHangCapNhat.splice(index, 1);
      } else {
        //Khi user click vao huy
        return;
      }
    }
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  render() {
    let tongSoLuong = this.state.gioHang.reduce((total, item) => {
      return (total += item.soLuong);
    }, 0);
    return (
      <div className="container mt-5">
        <h3 className="text-center text-white bg-dark">Bai Tap Gio Hang</h3>
        <ModalGioHang
          tangGiamSl={this.tangGiamSl}
          xoaGioHang={this.xoaGioHang}
          gioHang={this.state.gioHang}
        />
        <button
          className="btn btn-primary "
          data-toggle="modal"
          data-target="#modelId"
        >
          <span
            className="text-white bold"
            style={{ cursor: "pointer", fontSize: 20, fontWeight: "bold" }}
          >
            Gio Hang ({tongSoLuong})
          </span>
        </button>
        <DanhSachSanPham
          themGioHang={this.themGioHang}
          mangSanPham={dataPhone}
        />
      </div>
    );
  }
}
