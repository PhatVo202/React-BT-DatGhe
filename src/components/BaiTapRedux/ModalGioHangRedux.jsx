import React, { Component } from "react";

// ket noi redux( connect: ham ket noi reactComponent vs ReduxStore)
import { connect } from "react-redux";

class ModalGioHangRedux extends Component {
  renderGioHang = () => {
    //this.props.gioHang la thuoc tinh nhan tu redux
    return this.props.gioHang.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.maSP}</td>
          <td>{item.tenSP}</td>
          <td>
            <img src={item.hinhAnh} alt="#" width={100} height={100} />
          </td>
          <td>
            <button
              onClick={() => this.props.tangGiamSl(item.maSP, false)}
              className="btn btn-primary mr-2"
            >
              -
            </button>
            {item.soLuong}
            <button
              onClick={() => this.props.tangGiamSl(item.maSP, true)}
              className="btn btn-primary ml-2"
            >
              +
            </button>
          </td>
          <td>{item.giaBan}</td>
          <td>{item.soLuong * item.giaBan}</td>
          <td>
            <button
              onClick={() => this.props.xoaGioHang(index)}
              className="btn btn-danger"
            >
              Xoa Index
            </button>
          </td>
          <td>
            <button
              onClick={() => this.props.xoaMaSp(item.maSP)}
              className="btn btn-primary"
            >
              Xoa MaSp
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <table className="table ">
          <thead>
            <tr>
              <th>Ma SP</th>
              <th>Ten SP</th>
              <th>Hinh Anh</th>
              <th>So luong</th>
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
  //state la store tong => truy xuat den gio hang Reducer => bien state tren gio hang reducer
  return {
    gioHang: state.GioHangReducer.gioHang, //Tao ra 1 Prop cua Component ModalGioHangRedux
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (index) => {
      const action = {
        type: "XOA_SAN_PHAM",
        index,
      };
      dispatch(action);
    },
    xoaMaSp: (maSP) => {
      const action = {
        type: "XOA_MASP",
        maSP,
      };
      dispatch(action);
    },
    tangGiamSl: (item, isFlag) => {
      const action = {
        type: "TANG_GIAM_SL",
        item,
        isFlag,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(ModalGioHangRedux);
