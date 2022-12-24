import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../../redux/action/BaiTapGheAction";

class InforChair extends Component {
  renderListChair = () => {
    return this.props.danhSachGhe.map((ghe, index) => {
      return (
        <tr key={index} className="text-light" style={{ fontSize: "20px" }}>
          <td className="text-light">{ghe.soGhe}</td>
          <td className="text-light">{ghe.gia}</td>
          <td>
            <button
              onClick={() => this.props.huyGhe(ghe)}
              className="btn btn-danger"
            >
              Huy
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    console.log(this.props.danhSachGhe);
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>
          <span className="text-light">Ghế đã đặt</span>
          <br />
          <button className="gheDangChon"></button>
          <span className="text-light">Ghế đang đặt</span>
          <br />
          <button className="ghe"></button>
          <span className="text-light">Ghế chưa đặt</span>
        </div>

        <div>
          <table className="table table-bordered">
            <thead>
              <tr className="text-light" style={{ fontSize: "25px" }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{this.renderListChair()}</tbody>
            <tfoot>
              <tr className="text-light">
                <td></td>
                <td>Total:</td>
                <td>
                  {this.props.danhSachGhe.reduce((total, ghe) => {
                    return (total += ghe.gia);
                  }, 0)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGhe: state.BaiTapGheReducer.danhSachGheDangDat,
  };
};

const mapDipathToProps = (dipath) => {
  return {
    huyGhe: (ghe) => {
      dipath(huyGheAction(ghe));
    },
  };
};

export default connect(mapStateToProps, mapDipathToProps)(InforChair);
