import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamRedux2 extends Component {
  render() {
    let { phone } = this.props;
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={phone.hinhAnh}
          alt="#"
          width={150}
          height={300}
        />
        <div className="card-body">
          <h4 className="card-title">{phone.tenSP}</h4>
          <p className="card-text">{phone.giaBan}</p>
          <button
            onClick={() => this.props.themSanPham(phone)}
            className="btn btn-primary"
          >
            Them San Pham
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themSanPham: (sp) => {
      const spGioHang = {
        maSP: sp.maSP,
        tenSP: sp.tenSP,
        hinhAnh: sp.hinhAnh,
        giaBan: sp.giaBan,
        soLuong: 1,
      };
      const action = {
        type: "THEM_SAN_PHAM",
        spGioHang,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPhamRedux2);
