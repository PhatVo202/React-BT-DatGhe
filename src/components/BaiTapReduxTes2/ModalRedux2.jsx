import React, { Component } from "react";
import { connect } from "react-redux";

class ModalRedux2 extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((gioHang, index) => {
      return (
        <tr key={index}>
          <td>{gioHang.maSP}</td>
          <td>{gioHang.tenSP}</td>
          <td>
            <img src={gioHang.hinhAnh} alt="#" width={50} height={50} />
          </td>
          <td>
            <button
              onClick={() => this.props.tangGiamSl(gioHang, false)}
              className="btn btn-success"
            >
              -
            </button>
            {gioHang.soLuong}
            <button
              onClick={() => this.props.tangGiamSl(gioHang, true)}
              className="btn btn-success"
            >
              +
            </button>
          </td>
          <td>{gioHang.giaBan}</td>
          <td>{gioHang.soLuong * gioHang.giaBan}</td>
          <td>
            <button
              onClick={() => this.props.xoaSanPham(gioHang)}
              className="btn btn-danger"
            >
              Xoa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>MaSP</th>
              <th>TenSP</th>
              <th>Hinh Anh</th>
              <th>So Luong</th>
              <th>Gia</th>
              <th>Thanh Tien</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    gioHang: state.gioHangRedux2.gioHang,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaSanPham: (spXoa) => {
      dispatch({
        type: "XOA_SAN_PHAM",
        spXoa,
      });
    },

    tangGiamSl: (spTangGiam, isFlag) => {
      const action = {
        type: "TANG_GIAM_SL",
        spTangGiam,
        isFlag,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(ModalRedux2);
