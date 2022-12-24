import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../../redux/action/BaiTapGheAction";

class RowChair extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let scssGheDaDat = "";
      let disable = false;

      //Ghe da dat roi
      if (ghe.daDat) {
        scssGheDaDat = "gheDuocChon";
        disable = true;
      }

      //Dang dat
      let scssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat !== -1) {
        scssGheDangDat = "gheDangChon";
      }

      return (
        <button
          onClick={() => this.props.datGhe(ghe)}
          disabled={disable}
          className={`ghe ${scssGheDaDat} ${scssGheDangDat}`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  render() {
    return (
      <div className="text-light ml-5 mt-3" style={{ fontSize: "25px" }}>
        {this.props.hangGhe.hang} {this.renderGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapGheReducer.danhSachGheDangDat,
  };
};

const mapDipathToProps = (dipath) => {
  return {
    datGhe: (ghe) => {
      dipath(datGheAction(ghe));
    },
  };
};

export default connect(mapStateToProps, mapDipathToProps)(RowChair);
