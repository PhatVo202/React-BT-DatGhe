import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamRedux extends Component {
  render() {
    let { item } = this.props;
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={item.hinhAnh}
          alt="#"
          width={150}
          height={200}
        />
        <div className="card-body">
          <h4 className="card-title">{item.tenSP}</h4>
          <p className="card-text">{item.giaBan}</p>
          <button
            onClick={() => this.props.themGioHang(item)}
            className="btn btn-primary"
          >
            Them SP
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanpham) => {
      let spGioHang = {
        maSP: sanpham.maSP,
        tenSP: sanpham.tenSP,
        giaBan: sanpham.giaBan,
        soLuong: 1,
        hinhAnh: sanpham.hinhAnh,
      };
      dispatch({
        type: "THEM_SAN_PHAM",
        spGioHang,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPhamRedux);
