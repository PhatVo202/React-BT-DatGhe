import React, { Component } from "react";
import InforChair from "./InforChair";
import "./style.scss";
import listChairData from "../data/danhSachGhe.json";
import RowChair from "./RowChair";

export default class BaiTapDatGhe extends Component {
  renderHangGhe = () => {
    return listChairData.map((hangGhe, index) => {
      return (
        <div key={index}>
          <RowChair hangGhe={hangGhe} />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          background: "url(./img/bgmovie.jpeg)",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.7)",
          }}
        >
          <div className="row">
            <div className="col-8">
              <h1 className="text-center text-light">
                Bài Tập Đặt Vé CyberLearn.vn
              </h1>
              <p className="text-center text-light">Màn hình</p>
              <div>{this.renderHangGhe()}</div>
            </div>
            <div className="col-4">
              <div
                style={{ fontSize: "22px" }}
                className="display-4 text-light"
              >
                Danh sách ghế chọn
              </div>
              <InforChair />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
