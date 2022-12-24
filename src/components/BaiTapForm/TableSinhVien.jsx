import React, { Component } from "react";
import { connect } from "react-redux";

class TableSinhVien extends Component {
  renderMangSinhVien = () => {
    return this.props.mangSinhVien.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.maSV}</td>
          <td>{item.hoTen}</td>
          <td>{item.sdt}</td>
          <td>{item.email}</td>
        </tr>
      );
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <table className="table">
          <thead>
            <tr className="bg-dark text-white">
              <th>Ma SV</th>
              <th>Ho ten</th>
              <th>SDT</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{this.renderMangSinhVien()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    mangSinhVien: state.QuanLySVReducer.mangSV,
  };
};

export default connect(mapStateToProp, null)(TableSinhVien);
